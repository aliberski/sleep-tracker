import { ActionTypes } from './actions';
import { MoodTypes } from 'components/MoodSelector/types';
import { ErrorType } from 'constants/types';

export interface ISurveyStoreState {
  data: IDataState;
  form: IFormState;
}

export interface IDataState {
  loading: boolean;
  error: ErrorType;
  surveyData: ISurveyFormPayload;
}

export interface IFormState {
  loading: boolean;
  error: ErrorType;
  success: boolean;
}

export interface ISurveyData {
  mood: MoodTypes | null;
  sleepHour: string | null;
  wakeUpHour: string | null;
  food: boolean;
  alcohol: boolean;
  caffeine: boolean;
}

export interface ISurveyFormPayload extends ISurveyData {
  date: string | null;
}

export type Actions =
  | ISurveyDataRequest
  | ISurveyDataSuccess
  | ISurveyDataError
  | ISurveyDataClear
  | ISurveyFormRequest
  | ISurveyFormSuccess
  | ISurveyFormError
  | ISurveyFormClear;

// SURVEY_DATA
export interface ISurveyDataRequest {
  readonly type: ActionTypes.SURVEY_DATA_REQUEST;
  payload: ISurveyFormPayload;
}

export interface ISurveyDataSuccess {
  readonly type: ActionTypes.SURVEY_DATA_SUCCESS;
  payload: ISurveyFormPayload;
}

export interface ISurveyDataError {
  readonly type: ActionTypes.SURVEY_DATA_ERROR;
  payload: string | null;
}

export interface ISurveyDataClear {
  readonly type: ActionTypes.SURVEY_DATA_CLEAR;
}

// SURVEY_FORM
export interface ISurveyFormRequest {
  readonly type: ActionTypes.SURVEY_FORM_REQUEST;
  payload: ISurveyFormPayload;
}

export interface ISurveyFormSuccess {
  readonly type: ActionTypes.SURVEY_FORM_SUCCESS;
}

export interface ISurveyFormError {
  readonly type: ActionTypes.SURVEY_FORM_ERROR;
  payload: string | null;
}

export interface ISurveyFormClear {
  readonly type: ActionTypes.SURVEY_FORM_CLEAR;
}
