import { combineReducers } from 'redux';

import { ITestStoreState } from 'modules/test/types';
import testReducer from 'modules/Test/reducer';

export interface IStoreState {
  test: ITestStoreState;
}

export default combineReducers<IStoreState>({
  test: testReducer,
});
