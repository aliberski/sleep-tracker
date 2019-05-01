import { createAction } from 'redux-actions';
import { ErrorType } from 'constants/types';
import { IProfileFormPayload } from './types';

export enum ActionTypes {
  PROFILE_DATA_REQUEST = 'PROFILE_DATA - request',
  PROFILE_DATA_SUCCESS = 'PROFILE_DATA - success',
  PROFILE_DATA_ERROR = 'PROFILE_DATA - error',
  PROFILE_DATA_CLEAR = 'PROFILE_DATA - clear',

  PROFILE_FORM_REQUEST = 'PROFILE_FORM - request',
  PROFILE_FORM_SUCCESS = 'PROFILE_FORM - success',
  PROFILE_FORM_ERROR = 'PROFILE_FORM - error',
  PROFILE_FORM_CLEAR = 'PROFILE_FORM - clear',
}

export const profileActions = {
  profileDataRequest: createAction(ActionTypes.PROFILE_DATA_REQUEST),
  profileDataSuccess: createAction(
    ActionTypes.PROFILE_DATA_SUCCESS,
    (payload: IProfileFormPayload) => payload,
  ),
  profileDataError: createAction(
    ActionTypes.PROFILE_DATA_ERROR,
    (payload: ErrorType) => payload,
  ),
  profileDataClear: createAction(ActionTypes.PROFILE_DATA_CLEAR),

  profileFormRequest: createAction(
    ActionTypes.PROFILE_FORM_REQUEST,
    (payload: IProfileFormPayload) => payload,
  ),
  profileFormSuccess: createAction(ActionTypes.PROFILE_FORM_SUCCESS),
  profileFormError: createAction(
    ActionTypes.PROFILE_FORM_ERROR,
    (payload: ErrorType) => payload,
  ),
  profileFormClear: createAction(ActionTypes.PROFILE_FORM_CLEAR),
};
