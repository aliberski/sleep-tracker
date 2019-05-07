import { combineReducers } from 'redux';

import registerReducer from 'modules/Register/reducer';
import { IRegisterStoreState } from 'modules/Register/types';

import loginReducer from 'modules/Login/reducer';
import { ILoginStoreState } from 'modules/Login/types';

import remindPasswordReducer from 'modules/RemindPassword/reducer';
import { IRemindPasswordStoreState } from 'modules/RemindPassword/types';

import profileReducer from 'modules/Profile/reducer';
import { IProfileStoreState } from 'modules/Profile/types';

import settingsReducer from 'modules/Settings/reducer';
import { ISettingsStoreState } from 'modules/Settings/types';

import surveyReducer from 'modules/Survey/reducer';
import { ISurveyStoreState } from 'modules/Survey/types';

import selectedDayReducer from 'modules/SelectedDay/reducer';
import { ISelectedDayStoreState } from 'modules/SelectedDay/types';

export interface IStoreState {
  register: IRegisterStoreState;
  login: ILoginStoreState;
  remindPassword: IRemindPasswordStoreState;
  profile: IProfileStoreState;
  settings: ISettingsStoreState;
  survey: ISurveyStoreState;
  selectedDay: ISelectedDayStoreState;
}

export default combineReducers<IStoreState>({
  register: registerReducer,
  login: loginReducer,
  remindPassword: remindPasswordReducer,
  profile: profileReducer,
  settings: settingsReducer,
  survey: surveyReducer,
  selectedDay: selectedDayReducer,
});
