import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';

export interface ISettingsStoreState {
  data: IDataState;
}

export interface IDataState {
  loading: boolean;
  error: ErrorType;
  inputs: ISettingsPayload;
}

export interface ISettingsPayload {
  email: string;
}

export type Actions =
  | ISettingsDataRequest
  | ISettingsDataSuccess
  | ISettingsDataError
  | ISettingsDataClear;

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
