import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { get } from 'dot-prop';
import { ILoginPayload, ILoginRequest } from './types';
import texts from 'constants/translations';
import { ActionTypes, loginActions } from './actions';

const login = async (payload: ILoginPayload) => {
  const { email, password } = payload;
  const response = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => error.message);
  return response;
};

function* loginSaga(action: ILoginRequest) {
  try {
    const response = yield call(login, action.payload);
    if (typeof response === 'string') {
      yield put(loginActions.loginError(response));
    } else {
      const success = !!get(response, 'user', null);
      if (success) {
        yield put(loginActions.loginSuccess());
        yield put(loginActions.loginClear());
      } else {
        yield put(loginActions.loginError(texts.error));
      }
    }
  } catch (_) {
    yield put(loginActions.loginError(texts.error));
  }
}

export default function*() {
  yield takeLatest(ActionTypes.LOGIN_REQUEST, loginSaga);
}
