import { ActionTypes } from './actions';
import { ErrorType } from 'constants/types';

export interface IProfileStoreState {
  data: IDataState;
  form: IFormState;
}

export interface IDataState {
  loading: boolean;
  error: ErrorType;
  inputs: IProfileFormPayload;
}

export interface IFormState {
  loading: boolean;
  error: ErrorType;
  success: boolean;
}

export interface IProfileFormPayload {
  weight: string;
  height: string;
  age: string;
  activity: string | null;
}

export type Actions =
  | IProfileDataRequest
  | IProfileDataSuccess
  | IProfileDataError
  | IProfileDataClear
  | IProfileFormRequest
  | IProfileFormSuccess
  | IProfileFormError
  | IProfileFormClear;

// PROFILE_DATA
export interface IProfileDataRequest {
  readonly type: ActionTypes.PROFILE_DATA_REQUEST;
  payload: IProfileFormPayload;
}

export interface IProfileDataSuccess {
  readonly type: ActionTypes.PROFILE_DATA_SUCCESS;
  payload: IProfileFormPayload;
}

export interface IProfileDataError {
  readonly type: ActionTypes.PROFILE_DATA_ERROR;
  payload: string | null;
}

export interface IProfileDataClear {
  readonly type: ActionTypes.PROFILE_DATA_CLEAR;
}

// PROFILE_FORM
export interface IProfileFormRequest {
  readonly type: ActionTypes.PROFILE_FORM_REQUEST;
  payload: IProfileFormPayload;
}

export interface IProfileFormSuccess {
  readonly type: ActionTypes.PROFILE_FORM_SUCCESS;
}

export interface IProfileFormError {
  readonly type: ActionTypes.PROFILE_FORM_ERROR;
  payload: string | null;
}

export interface IProfileFormClear {
  readonly type: ActionTypes.PROFILE_FORM_CLEAR;
}
