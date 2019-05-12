import { combineReducers } from 'redux';
import { ErrorType } from 'constants/types';
import { ActionTypes } from './actions';
import {
  Actions,
  IProfileStoreState,
  IDataState,
  IFormState,
  IProfileFormPayload,
} from './types';

const initialInputsState = {
  weight: '',
  height: '',
  age: '',
  activity: null,
};

// PROFILE_DATA

const dataSuccess = (
  state: IProfileFormPayload = initialInputsState,
  action: Actions,
): IProfileFormPayload => {
  switch (action.type) {
    case ActionTypes.PROFILE_DATA_SUCCESS:
      return action.payload;
    case ActionTypes.PROFILE_DATA_REQUEST:
    case ActionTypes.PROFILE_DATA_ERROR:
    case ActionTypes.PROFILE_DATA_CLEAR:
    default:
      return state;
  }
};

const dataLoading = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.PROFILE_DATA_REQUEST:
      return true;
    case ActionTypes.PROFILE_DATA_SUCCESS:
    case ActionTypes.PROFILE_DATA_ERROR:
    case ActionTypes.PROFILE_DATA_CLEAR:
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
    case ActionTypes.PROFILE_DATA_REQUEST:
    case ActionTypes.PROFILE_DATA_SUCCESS:
    case ActionTypes.PROFILE_DATA_CLEAR:
      return null;
    case ActionTypes.PROFILE_DATA_ERROR:
      return action.payload;
    default:
      return state;
  }
};

// PROFILE_FORM

const formSuccess = (
  state: boolean = false,
  action: Actions,
): boolean => {
  switch (action.type) {
    case ActionTypes.PROFILE_FORM_SUCCESS:
      return true;
    case ActionTypes.PROFILE_FORM_REQUEST:
    case ActionTypes.PROFILE_FORM_ERROR:
    case ActionTypes.PROFILE_FORM_CLEAR:
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
    case ActionTypes.PROFILE_FORM_REQUEST:
      return true;
    case ActionTypes.PROFILE_FORM_SUCCESS:
    case ActionTypes.PROFILE_FORM_ERROR:
    case ActionTypes.PROFILE_FORM_CLEAR:
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
    case ActionTypes.PROFILE_FORM_REQUEST:
    case ActionTypes.PROFILE_FORM_SUCCESS:
    case ActionTypes.PROFILE_FORM_CLEAR:
      return null;
    case ActionTypes.PROFILE_FORM_ERROR:
      return action.payload;
    default:
      return state;
  }
};

const dataReducer = combineReducers<IDataState>({
  loading: dataLoading,
  error: dataError,
  inputs: dataSuccess,
});

const formReducer = combineReducers<IFormState>({
  loading: formLoading,
  error: formError,
  success: formSuccess,
});

export default combineReducers<IProfileStoreState>({
  data: dataReducer,
  form: formReducer,
});
