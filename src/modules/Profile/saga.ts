import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { get } from 'dot-prop';

import { getUid } from 'services/user';
import endpoint from 'constants/databaseEndpoints';
import texts from 'constants/translations';
import { ActionTypes, profileActions } from './actions';
import {
  IProfileDataRequest,
  IProfileFormRequest,
  IProfileFormPayload,
} from './types';

const getProfile = async () => {
  const uid = getUid();
  const snapshot = await firebase
    .database()
    .ref(`${uid}/${endpoint.PROFILE}`)
    .once('value');
  return get(snapshot, '_value', texts.error);
};

function* profileDataSaga(action: IProfileDataRequest) {
  try {
    const response = yield call(getProfile);
    if (typeof response === 'string') {
      yield put(profileActions.profileDataError(response));
    } else {
      response &&
        (yield put(
          profileActions.profileDataSuccess(response),
        ));
      yield put(profileActions.profileDataClear());
    }
  } catch (_) {
    yield put(profileActions.profileDataError(texts.error));
  }
}

const submitProfile = async (
  payload: IProfileFormPayload,
) => {
  const uid = getUid();
  await firebase
    .database()
    .ref(`${uid}/${endpoint.PROFILE}`)
    .set(payload)
    .catch(error => {
      if (error) {
        return texts.error;
      }
    });
  return true;
};

function* profileFormSaga(action: IProfileFormRequest) {
  try {
    const response = yield call(
      submitProfile,
      action.payload,
    );
    if (typeof response === 'string') {
      yield put(profileActions.profileFormError(response));
    } else {
      yield put(profileActions.profileFormSuccess());
      yield put(profileActions.profileFormClear());
      // request profile data again
      yield put(profileActions.profileDataRequest());
    }
  } catch (_) {
    yield put(profileActions.profileFormError(texts.error));
  }
}

export default function*() {
  yield takeLatest(
    ActionTypes.PROFILE_DATA_REQUEST,
    profileDataSaga,
  );
  yield takeLatest(
    ActionTypes.PROFILE_FORM_REQUEST,
    profileFormSaga,
  );
}
