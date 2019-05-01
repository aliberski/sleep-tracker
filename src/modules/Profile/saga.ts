import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { get } from 'dot-prop';
import {
  IProfileDataRequest,
  IProfileFormRequest,
  IProfileFormPayload,
} from './types';
import texts from 'constants/translations';
import { ActionTypes, profileActions } from './actions';

const getProfile = async () => {
  // TODO:
  return true;
};

function* profileDataSaga(action: IProfileDataRequest) {
  try {
    const response = yield call(getProfile);
    if (typeof response === 'string') {
      yield put(profileActions.profileDataError(response));
    } else {
      yield put(profileActions.profileDataSuccess(response));
    }
  } catch (_) {
    yield put(profileActions.profileDataError(texts.error));
  }
}

const submitProfile = async (payload: IProfileFormPayload) => {
  // TODO:
  return true;
};

function* profileFormSaga(action: IProfileFormRequest) {
  try {
    const response = yield call(submitProfile, action.payload);
    if (typeof response === 'string') {
      yield put(profileActions.profileFormError(response));
    } else {
      yield put(profileActions.profileFormSuccess());
      yield put(profileActions.profileFormClear());
    }
  } catch (_) {
    yield put(profileActions.profileFormError(texts.error));
  }
}

export default function*() {
  yield takeLatest(ActionTypes.PROFILE_DATA_REQUEST, profileDataSaga);
  yield takeLatest(ActionTypes.PROFILE_FORM_REQUEST, profileFormSaga);
}
