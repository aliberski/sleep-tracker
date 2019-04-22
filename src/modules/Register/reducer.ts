import { combineReducers } from 'redux';
import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';
import { Actions, IRegisterStoreState } from './types';

const success = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.REGISTER_SUCCESS:
      return true;
    case ActionTypes.REGISTER_REQUEST:
    case ActionTypes.REGISTER_ERROR:
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
    case ActionTypes.REGISTER_REQUEST:
      return true;
    case ActionTypes.REGISTER_SUCCESS:
    case ActionTypes.REGISTER_ERROR:
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
    case ActionTypes.REGISTER_REQUEST:
    case ActionTypes.REGISTER_SUCCESS:
      return null;
    case ActionTypes.REGISTER_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers<IRegisterStoreState>({
  success,
  loading,
  error,
});
