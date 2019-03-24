import { combineReducers } from 'redux';
import { ActionTypes } from './actions';
import { ITestState, Actions, ITestStoreState } from './types';

const initialState: ITestState = {
  testing: false,
};

const test = (state = initialState, action: Actions): ITestState => {
  switch (action.type) {
    case ActionTypes.TEST:
      return {
        ...state,
        testing: true,
      };
    default:
      return state;
  }
};

export default combineReducers<ITestStoreState>({
  test,
});
