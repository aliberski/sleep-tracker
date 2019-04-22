import { call, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { ILogout } from './types';
import texts from 'constants/translations';
import { ActionTypes } from './actions';

const logout = async () => {
  await firebase.auth().signOut();
};

function* logoutSaga(action: ILogout) {
  try {
    yield call(logout);
  } catch (_) {
    console.log(texts.error);
  }
}

export default function*() {
  yield takeLatest(ActionTypes.LOGOUT, logoutSaga);
}
