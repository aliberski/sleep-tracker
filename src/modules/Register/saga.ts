import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'react-native-firebase';
import { get } from 'dot-prop';
import { IRegisterPayload, IRegisterRequest } from './types';
import texts from 'constants/translations';
import { ActionTypes, registerActions } from './actions';

const register = async (payload: IRegisterPayload) => {
  const { email, password } = payload;
  const response = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => error.message);
  return response;
};

function* registerSaga(action: IRegisterRequest) {
  try {
    const response = yield call(register, action.payload);
    if (typeof response === 'string') {
      yield put(registerActions.registerError(response));
    } else {
      const success = get(
        response,
        'additionalUserInfo.isNewUser',
        false,
      );
      if (success) {
        yield put(registerActions.registerSuccess());
        yield put(registerActions.registerClear());
      } else {
        yield put(registerActions.registerError(texts.error));
      }
    }
  } catch (_) {
    yield put(registerActions.registerError(texts.error));
  }
}

export default function*() {
  yield takeLatest(ActionTypes.REGISTER_REQUEST, registerSaga);
}
