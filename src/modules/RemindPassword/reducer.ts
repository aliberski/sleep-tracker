import { combineReducers } from 'redux';
import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';
import { Actions, IRemindPasswordStoreState } from './types';

const success = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.REMIND_PASSWORD_SUCCESS:
      return true;
    case ActionTypes.REMIND_PASSWORD_REQUEST:
    case ActionTypes.REMIND_PASSWORD_ERROR:
    case ActionTypes.REMIND_PASSWORD_CLEAR:
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
    case ActionTypes.REMIND_PASSWORD_REQUEST:
      return true;
    case ActionTypes.REMIND_PASSWORD_SUCCESS:
    case ActionTypes.REMIND_PASSWORD_ERROR:
    case ActionTypes.REMIND_PASSWORD_CLEAR:
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
    case ActionTypes.REMIND_PASSWORD_REQUEST:
    case ActionTypes.REMIND_PASSWORD_SUCCESS:
    case ActionTypes.REMIND_PASSWORD_CLEAR:
      return null;
    case ActionTypes.REMIND_PASSWORD_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers<IRemindPasswordStoreState>({
  success,
  loading,
  error,
});
