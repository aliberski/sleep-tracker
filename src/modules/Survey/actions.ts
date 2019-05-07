import { createAction } from 'redux-actions';
import { ErrorType } from 'constants/types';
import { ISurveyFormPayload } from './types';

export enum ActionTypes {
  SURVEY_DATA_REQUEST = 'SURVEY_DATA - request',
  SURVEY_DATA_SUCCESS = 'SURVEY_DATA - success',
  SURVEY_DATA_ERROR = 'SURVEY_DATA - error',
  SURVEY_DATA_CLEAR = 'SURVEY_DATA - clear',

  SURVEY_FORM_REQUEST = 'SURVEY_FORM - request',
  SURVEY_FORM_SUCCESS = 'SURVEY_FORM - success',
  SURVEY_FORM_ERROR = 'SURVEY_FORM - error',
  SURVEY_FORM_CLEAR = 'SURVEY_FORM - clear',
}

export const surveyActions = {
  surveyDataRequest: createAction(ActionTypes.SURVEY_DATA_REQUEST),
  surveyDataSuccess: createAction(
    ActionTypes.SURVEY_DATA_SUCCESS,
    (payload: ISurveyFormPayload) => payload,
  ),
  surveyDataError: createAction(
    ActionTypes.SURVEY_DATA_ERROR,
    (payload: ErrorType) => payload,
  ),
  surveyDataClear: createAction(ActionTypes.SURVEY_DATA_CLEAR),

  surveyFormRequest: createAction(
    ActionTypes.SURVEY_FORM_REQUEST,
    (payload: ISurveyFormPayload) => payload,
  ),
  surveyFormSuccess: createAction(ActionTypes.SURVEY_FORM_SUCCESS),
  surveyFormError: createAction(
    ActionTypes.SURVEY_FORM_ERROR,
    (payload: ErrorType) => payload,
  ),
  surveyFormClear: createAction(ActionTypes.SURVEY_FORM_CLEAR),
};
