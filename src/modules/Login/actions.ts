import { createAction } from 'redux-actions';
import { ErrorType } from 'constants/types';
import { ILoginPayload } from './types';

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN - request',
  LOGIN_SUCCESS = 'LOGIN - success',
  LOGIN_ERROR = 'LOGIN - error',
}

export const loginActions = {
  loginRequest: createAction(
    ActionTypes.LOGIN_REQUEST,
    (payload: ILoginPayload) => payload,
  ),
  loginSuccess: createAction(ActionTypes.LOGIN_SUCCESS),
  loginError: createAction(
    ActionTypes.LOGIN_ERROR,
    (payload: ErrorType) => payload,
  ),
};
