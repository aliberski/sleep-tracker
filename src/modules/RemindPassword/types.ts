import { ActionTypes } from './actions';

export interface IRemindPasswordStoreState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

export interface IRemindPasswordPayload {
  email: string;
}

export type Actions =
  | IRemindPasswordRequest
  | IRemindPasswordSuccess
  | IRemindPasswordError
  | IRemindPasswordClear;

export interface IRemindPasswordRequest {
  readonly type: ActionTypes.REMIND_PASSWORD_REQUEST;
  payload: IRemindPasswordPayload;
}

export interface IRemindPasswordSuccess {
  readonly type: ActionTypes.REMIND_PASSWORD_SUCCESS;
}

export interface IRemindPasswordError {
  readonly type: ActionTypes.REMIND_PASSWORD_ERROR;
  payload: string | null;
}

export interface IRemindPasswordClear {
  readonly type: ActionTypes.REMIND_PASSWORD_CLEAR;
}
