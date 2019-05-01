import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { get } from 'dot-prop';
import { ISettingsDataRequest } from './types';
import { is } from 'helpers/index';
import texts from 'constants/translations';
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

export default function*() {
  yield takeLatest(ActionTypes.SETTINGS_DATA_REQUEST, settingsDataSaga);
}
