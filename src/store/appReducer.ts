import { combineReducers } from 'redux';

import registerReducer from 'modules/Register/reducer';
import { IRegisterStoreState } from 'modules/Register/types';

import loginReducer from 'modules/Login/reducer';
import { ILoginStoreState } from 'modules/Login/types';

export interface IStoreState {
  register: IRegisterStoreState;
  login: ILoginStoreState;
}

export default combineReducers<IStoreState>({
  register: registerReducer,
  login: loginReducer,
});
