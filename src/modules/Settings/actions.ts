import { createAction } from 'redux-actions';
import { ErrorType } from 'constants/types';
import { ISettingsPayload } from './types';

export enum ActionTypes {
  SETTINGS_DATA_REQUEST = 'SETTINGS_DATA - request',
  SETTINGS_DATA_SUCCESS = 'SETTINGS_DATA - success',
  SETTINGS_DATA_ERROR = 'SETTINGS_DATA - error',
  SETTINGS_DATA_CLEAR = 'SETTINGS_DATA - clear',
}

export const settingsActions = {
  settingsDataRequest: createAction(ActionTypes.SETTINGS_DATA_REQUEST),
  settingsDataSuccess: createAction(
    ActionTypes.SETTINGS_DATA_SUCCESS,
    (payload: ISettingsPayload) => payload,
  ),
  settingsDataError: createAction(
    ActionTypes.SETTINGS_DATA_ERROR,
    (payload: ErrorType) => payload,
  ),
  settingsDataClear: createAction(ActionTypes.SETTINGS_DATA_CLEAR),
};
