import { combineReducers } from 'redux';
import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';
import {
  Actions,
  ISettingsStoreState,
  IDataState,
  ISettingsPayload,
} from './types';

const initialInputsState = {
  email: '',
};

// SETTINGS_DATA
const dataSuccess = (
  state: ISettingsPayload = initialInputsState,
  action: Actions,
): ISettingsPayload => {
  switch (action.type) {
    case ActionTypes.SETTINGS_DATA_SUCCESS:
      return action.payload;
    case ActionTypes.SETTINGS_DATA_REQUEST:
    case ActionTypes.SETTINGS_DATA_ERROR:
    case ActionTypes.SETTINGS_DATA_CLEAR:
      return initialInputsState;
    default:
      return state;
  }
};

const dataLoading = (state: boolean = false, action: Actions): boolean => {
  switch (action.type) {
    case ActionTypes.SETTINGS_DATA_REQUEST:
      return true;
    case ActionTypes.SETTINGS_DATA_SUCCESS:
    case ActionTypes.SETTINGS_DATA_ERROR:
    case ActionTypes.SETTINGS_DATA_CLEAR:
      return false;
    default:
      return state;
  }
};

const dataError = (
  state: ErrorType = null,
  action: Actions,
): ErrorType => {
  switch (action.type) {
    case ActionTypes.SETTINGS_DATA_REQUEST:
    case ActionTypes.SETTINGS_DATA_SUCCESS:
    case ActionTypes.SETTINGS_DATA_CLEAR:
      return null;
    case ActionTypes.SETTINGS_DATA_ERROR:
      return action.payload;
    default:
      return state;
  }
};

const dataReducer = combineReducers<IDataState>({
  loading: dataLoading,
  error: dataError,
  inputs: dataSuccess,
});

export default combineReducers<ISettingsStoreState>({
  data: dataReducer,
});
