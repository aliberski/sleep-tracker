import { all } from 'redux-saga/effects';
import registerSaga from 'modules/Register/saga';
import logoutSaga from 'modules/Logout/saga';
import loginSaga from 'modules/Login/saga';
import remindPasswordSaga from 'modules/RemindPassword/saga';
import profileSaga from 'modules/Profile/saga';
import settingsSaga from 'modules/Settings/saga';

export default function* rootSaga() {
  yield all([
    registerSaga(),
    logoutSaga(),
    loginSaga(),
    remindPasswordSaga(),
    profileSaga(),
    settingsSaga(),
  ]);
}
