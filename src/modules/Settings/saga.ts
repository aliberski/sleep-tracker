import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { get } from 'dot-prop';
import { is } from 'helpers/index';
import texts from 'constants/translations';
import { ISettingsDataRequest, ISettingsResetRequest } from './types';
import { ActionTypes, settingsActions } from './actions';

const getSettings = async () => {
  const currentUser = firebase.auth().currentUser;
  const email = currentUser && get(currentUser, '_user.email', '');
  if (!currentUser || !is(email)) {
    throw new Error('');
  }
  return { email };
};

function* settingsDataSaga(action: ISettingsDataRequest) {
  try {
    const response = yield call(getSettings);
    yield put(settingsActions.settingsDataSuccess(response));
  } catch (_) {
    yield put(settingsActions.settingsDataError(texts.error));
  }
}

const resetPassword = async (email: string) => {
  await firebase.auth().sendPasswordResetEmail(email);
};

function* settingsResetSaga(action: ISettingsResetRequest) {
  try {
    yield call(resetPassword, action.payload);
    yield put(settingsActions.settingsResetSuccess());
    yield put(settingsActions.settingsResetClear());
  } catch (_) {
    yield put(settingsActions.settingsResetError(texts.error));
  }
}

export default function*() {
  yield takeLatest(ActionTypes.SETTINGS_DATA_REQUEST, settingsDataSaga);
  yield takeLatest(ActionTypes.SETTINGS_RESET_REQUEST, settingsResetSaga);
}
