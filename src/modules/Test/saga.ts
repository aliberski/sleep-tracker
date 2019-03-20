import { call, put, takeLatest } from 'redux-saga/effects';
import { ITest } from './types';
import { ActionTypes } from './actions';

const fetchData = () => {
  console.log('DATA');
  return ['1', '2'];
};

function* testSaga(action: ITest) {
  try {
    yield call(fetchData);
  } catch (error) {
    console.log('error', error);
  }
}

export default function*() {
  yield takeLatest(ActionTypes.TEST, testSaga);
}
