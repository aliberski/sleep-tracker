import { ActionTypes } from './actions';

export interface ILoginStoreState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export type Actions =
  | ILoginRequest
  | ILoginSuccess
  | ILoginError
  | ILoginClear;

export interface ILoginRequest {
  readonly type: ActionTypes.LOGIN_REQUEST;
  payload: ILoginPayload;
}

export interface ILoginSuccess {
  readonly type: ActionTypes.LOGIN_SUCCESS;
}

export interface ILoginError {
  readonly type: ActionTypes.LOGIN_ERROR;
  payload: string | null;
}

export interface ILoginClear {
  readonly type: ActionTypes.LOGIN_CLEAR;
}
