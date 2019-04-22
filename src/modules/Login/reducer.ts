import { combineReducers } from 'redux';
import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';
import { Actions, ILoginStoreState } from './types';

const success = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return true;
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.LOGIN_ERROR:
      return false;
    default:
      return state;
  }
};

const loading = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return true;
    case ActionTypes.LOGIN_SUCCESS:
    case ActionTypes.LOGIN_ERROR:
      return false;
    default:
      return state;
  }
};

const error = (
  state: ErrorType = null,
  action: Actions,
): ErrorType => {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
    case ActionTypes.LOGIN_SUCCESS:
      return null;
    case ActionTypes.LOGIN_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers<ILoginStoreState>({
  success,
  loading,
  error,
});
