import { call, takeLatest, put } from 'redux-saga/effects';
import firebase from 'react-native-firebase';

import { rootActions } from 'store/rootReducer';
import texts from 'constants/translations';
import { ILogout } from './types';
import { ActionTypes } from './actions';

const logout = async () => {
  await firebase.auth().signOut();
};

function* logoutSaga(action: ILogout) {
  try {
    yield call(logout);
    yield put(rootActions.clearStore());
  } catch (_) {
    console.log(texts.error);
  }
}

export default function*() {
  yield takeLatest(ActionTypes.LOGOUT, logoutSaga);
}
