import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { get } from 'dot-prop';

import texts from 'constants/translations';
import endpoint from 'constants/databaseEndpoints';
import { getUid } from 'services/user';
import {
  ISurveyDataRequest,
  ISurveyFormRequest,
  ISurveyFormPayload,
} from './types';
import { ActionTypes, surveyActions } from './actions';

const getSurvey = async () => {
  const uid = getUid();
  const snapshot = await firebase
    .database()
    .ref(`${uid}/${endpoint.SURVEY}`)
    .once('value');
  return get(snapshot, '_value', texts.error);
};

function* surveyDataSaga(action: ISurveyDataRequest) {
  try {
    const response = yield call(getSurvey);
    if (typeof response === 'string') {
      yield put(surveyActions.surveyDataError(response));
    } else {
      yield put(surveyActions.surveyDataSuccess(response));
    }
  } catch (_) {
    yield put(surveyActions.surveyDataError(texts.error));
  }
}

const submitSurvey = async (
  payload: ISurveyFormPayload,
) => {
  const { date, ...formData } = payload;
  if (!date) {
    return texts.error;
  }
  const uid = getUid();
  await firebase
    .database()
    .ref(`${uid}/${endpoint.SURVEY}/${date}`)
    .set(formData)
    .catch(error => {
      if (error) {
        return texts.error;
      }
    });
  return true;
};

function* surveyFormSaga(action: ISurveyFormRequest) {
  try {
    const response = yield call(
      submitSurvey,
      action.payload,
    );
    if (typeof response === 'string') {
      yield put(surveyActions.surveyFormError(response));
    } else {
      yield put(surveyActions.surveyFormSuccess());
      yield put(surveyActions.surveyFormClear());
      // fetch data again after success submit
      yield put(surveyActions.surveyDataRequest());
    }
  } catch (_) {
    yield put(surveyActions.surveyFormError(texts.error));
  }
}

export default function*() {
  yield takeLatest(
    ActionTypes.SURVEY_DATA_REQUEST,
    surveyDataSaga,
  );
  yield takeLatest(
    ActionTypes.SURVEY_FORM_REQUEST,
    surveyFormSaga,
  );
}
