import { combineReducers } from 'redux';

import registerReducer from 'modules/Register/reducer';
import { IRegisterStoreState } from 'modules/Register/types';

export interface IStoreState {
  register: IRegisterStoreState;
}

export default combineReducers<IStoreState>({
  register: registerReducer,
});
