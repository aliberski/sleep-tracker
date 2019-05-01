import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';

export interface ISettingsStoreState {
  data: IDataState;
  reset: IResetState;
}

export interface IDataState {
  loading: boolean;
  error: ErrorType;
  inputs: ISettingsPayload;
}

export interface IResetState {
  loading: boolean;
  error: ErrorType;
  success: boolean;
}

export interface ISettingsPayload {
  email: string;
}

export type DataActions =
  | ISettingsDataRequest
  | ISettingsDataSuccess
  | ISettingsDataError
  | ISettingsDataClear;

export type ResetActions =
  | ISettingsResetRequest
  | ISettingsResetSuccess
  | ISettingsResetError
  | ISettingsResetClear;

// SETTINGS_DATA
export interface ISettingsDataRequest {
  readonly type: ActionTypes.SETTINGS_DATA_REQUEST;
}

export interface ISettingsDataSuccess {
  readonly type: ActionTypes.SETTINGS_DATA_SUCCESS;
  payload: ISettingsPayload;
}

export interface ISettingsDataError {
  readonly type: ActionTypes.SETTINGS_DATA_ERROR;
  payload: string | null;
}

export interface ISettingsDataClear {
  readonly type: ActionTypes.SETTINGS_DATA_CLEAR;
}

// SETTINGS_RESET
export interface ISettingsResetRequest {
  readonly type: ActionTypes.SETTINGS_RESET_REQUEST;
  payload: string;
}

export interface ISettingsResetSuccess {
  readonly type: ActionTypes.SETTINGS_RESET_SUCCESS;
}

export interface ISettingsResetError {
  readonly type: ActionTypes.SETTINGS_RESET_ERROR;
  payload: string;
}

export interface ISettingsResetClear {
  readonly type: ActionTypes.SETTINGS_RESET_CLEAR;
}
