import { combineReducers } from 'redux';
import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';
import {
  Actions,
  ISurveyStoreState,
  IDataState,
  IFormState,
  ISurveyFormPayload,
} from './types';

// SURVEY_DATA

const dataSuccess = (
  state: any = {},
  action: Actions,
): ISurveyFormPayload => {
  switch (action.type) {
    case ActionTypes.SURVEY_DATA_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const dataLoading = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.SURVEY_DATA_REQUEST:
      return true;
    case ActionTypes.SURVEY_DATA_SUCCESS:
    case ActionTypes.SURVEY_DATA_ERROR:
    case ActionTypes.SURVEY_DATA_CLEAR:
      return false;
    default:
      return state;
  }
};

const dataError = (
  state: ErrorType = null,
  action: Actions,
): ErrorType => {
  switch (action.type) {
    case ActionTypes.SURVEY_DATA_REQUEST:
    case ActionTypes.SURVEY_DATA_SUCCESS:
    case ActionTypes.SURVEY_DATA_CLEAR:
      return null;
    case ActionTypes.SURVEY_DATA_ERROR:
      return action.payload;
    default:
      return state;
  }
};

// SURVEY_FORM

const formSuccess = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.SURVEY_FORM_SUCCESS:
      return true;
    case ActionTypes.SURVEY_FORM_REQUEST:
    case ActionTypes.SURVEY_FORM_ERROR:
    case ActionTypes.SURVEY_FORM_CLEAR:
      return false;
    default:
      return state;
  }
};

const formLoading = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.SURVEY_FORM_REQUEST:
      return true;
    case ActionTypes.SURVEY_FORM_SUCCESS:
    case ActionTypes.SURVEY_FORM_ERROR:
    case ActionTypes.SURVEY_FORM_CLEAR:
      return false;
    default:
      return state;
  }
};

const formError = (
  state: ErrorType = null,
  action: Actions,
): ErrorType => {
  switch (action.type) {
    case ActionTypes.SURVEY_FORM_REQUEST:
    case ActionTypes.SURVEY_FORM_SUCCESS:
    case ActionTypes.SURVEY_FORM_CLEAR:
      return null;
    case ActionTypes.SURVEY_FORM_ERROR:
      return action.payload;
    default:
      return state;
  }
};

const dataReducer = combineReducers<IDataState>({
  loading: dataLoading,
  error: dataError,
  surveyData: dataSuccess,
});

const formReducer = combineReducers<IFormState>({
  loading: formLoading,
  error: formError,
  success: formSuccess,
});

export default combineReducers<ISurveyStoreState>({
  data: dataReducer,
  form: formReducer,
});
