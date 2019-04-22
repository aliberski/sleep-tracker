import { all } from 'redux-saga/effects';
import registerSaga from 'modules/Register/saga';
import logoutSaga from 'modules/Logout/saga';

export default function* rootSaga() {
  yield all([
    // put sagas here
    registerSaga(),
    logoutSaga(),
  ]);
}
