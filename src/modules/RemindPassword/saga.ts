import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import {
  IRemindPasswordPayload,
  IRemindPasswordRequest,
} from './types';
import texts from 'constants/translations';
import { ActionTypes, remindPasswordActions } from './actions';

const remindPassword = async (payload: IRemindPasswordPayload) => {
  const { email } = payload;
  const response = await firebase
    .auth()
    .sendPasswordResetEmail(email)
    .catch(error => error.message);
  return response;
};

function* remindPasswordSaga(action: IRemindPasswordRequest) {
  try {
    const response = yield call(remindPassword, action.payload);
    if (typeof response === 'string') {
      yield put(remindPasswordActions.remindPasswordError(response));
    } else {
      yield put(remindPasswordActions.remindPasswordSuccess());
      yield put(remindPasswordActions.remindPasswordClear());
    }
  } catch (_) {
    yield put(remindPasswordActions.remindPasswordError(texts.error));
  }
}

export default function*() {
  yield takeLatest(
    ActionTypes.REMIND_PASSWORD_REQUEST,
    remindPasswordSaga,
  );
}
