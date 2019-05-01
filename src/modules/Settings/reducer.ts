import { combineReducers } from 'redux';
import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';
import {
  DataActions,
  ResetActions,
  IResetState,
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
  action: DataActions,
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

const dataLoading = (
  state: boolean = false,
  action: DataActions,
): boolean => {
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
  action: DataActions,
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

// SETTINGS_RESET
const resetSuccess = (
  state: boolean = false,
  action: ResetActions,
): boolean => {
  switch (action.type) {
    case ActionTypes.SETTINGS_RESET_SUCCESS:
      return true;
    case ActionTypes.SETTINGS_RESET_REQUEST:
    case ActionTypes.SETTINGS_RESET_ERROR:
    case ActionTypes.SETTINGS_RESET_CLEAR:
      return false;
    default:
      return state;
  }
};

const resetLoading = (
  state: boolean = false,
  action: ResetActions,
): boolean => {
  switch (action.type) {
    case ActionTypes.SETTINGS_RESET_REQUEST:
      return true;
    case ActionTypes.SETTINGS_RESET_SUCCESS:
    case ActionTypes.SETTINGS_RESET_ERROR:
    case ActionTypes.SETTINGS_RESET_CLEAR:
      return false;
    default:
      return state;
  }
};

const resetError = (
  state: ErrorType = null,
  action: ResetActions,
): ErrorType => {
  switch (action.type) {
    case ActionTypes.SETTINGS_RESET_REQUEST:
    case ActionTypes.SETTINGS_RESET_SUCCESS:
    case ActionTypes.SETTINGS_RESET_CLEAR:
      return null;
    case ActionTypes.SETTINGS_RESET_ERROR:
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

const resetReducer = combineReducers<IResetState>({
  loading: resetLoading,
  error: resetError,
  success: resetSuccess,
});

export default combineReducers<ISettingsStoreState>({
  data: dataReducer,
  reset: resetReducer,
});
