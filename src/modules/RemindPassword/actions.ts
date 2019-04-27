import { createAction } from 'redux-actions';
import { ErrorType } from 'constants/types';
import { IRemindPasswordPayload } from './types';

export enum ActionTypes {
  REMIND_PASSWORD_REQUEST = 'REMIND_PASSWORD - request',
  REMIND_PASSWORD_SUCCESS = 'REMIND_PASSWORD - success',
  REMIND_PASSWORD_ERROR = 'REMIND_PASSWORD - error',
  REMIND_PASSWORD_CLEAR = 'REMIND_PASSWORD - clear',
}

export const remindPasswordActions = {
  remindPasswordRequest: createAction(
    ActionTypes.REMIND_PASSWORD_REQUEST,
    (payload: IRemindPasswordPayload) => payload,
  ),
  remindPasswordSuccess: createAction(
    ActionTypes.REMIND_PASSWORD_SUCCESS,
  ),
  remindPasswordError: createAction(
    ActionTypes.REMIND_PASSWORD_ERROR,
    (payload: ErrorType) => payload,
  ),
  remindPasswordClear: createAction(
    ActionTypes.REMIND_PASSWORD_CLEAR,
  ),
};
