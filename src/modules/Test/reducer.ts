import { combineReducers } from 'redux';
import { ActionTypes } from './actions';
import { ITestState, Actions } from './types';

const initialState: ITestState = {
  testing: false,
};

const test = (state = initialState, action: Actions) => {
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

export default combineReducers({
  test,
});
