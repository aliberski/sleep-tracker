import { createAction } from 'redux-actions';
import { ErrorType } from 'constants/types';
import { IRegisterPayload } from './types';

export enum ActionTypes {
  REGISTER_REQUEST = 'REGISTER - request',
  REGISTER_SUCCESS = 'REGISTER - success',
  REGISTER_ERROR = 'REGISTER - error',
}

export const registerActions = {
  registerRequest: createAction(
    ActionTypes.REGISTER_REQUEST,
    (payload: IRegisterPayload) => payload,
  ),
  registerSuccess: createAction(
    ActionTypes.REGISTER_SUCCESS,
  ),
  registerError: createAction(
    ActionTypes.REGISTER_ERROR,
    (payload: ErrorType) => payload,
  ),
};
