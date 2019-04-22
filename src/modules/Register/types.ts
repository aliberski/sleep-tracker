import { ActionTypes } from './actions';

export interface IRegisterStoreState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export interface IRegisterPayload {
  email: string;
  password: string;
}

export type Actions =
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterError;

export interface IRegisterRequest {
  readonly type: ActionTypes.REGISTER_REQUEST;
  payload: IRegisterPayload;
}

export interface IRegisterSuccess {
  readonly type: ActionTypes.REGISTER_SUCCESS;
}

export interface IRegisterError {
  readonly type: ActionTypes.REGISTER_ERROR;
  payload: string | null;
}
