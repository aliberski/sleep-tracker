import { createAction } from 'redux-actions';
import appReducer from './appReducer';

export enum ActionTypes {
  CLEAR_STORE = 'CLEAR_STORE',
}

export const rootActions = {
  clearStore: createAction(ActionTypes.CLEAR_STORE),
};

const rootReducer = (state: any, action: any) => {
  if (action.type === ActionTypes.CLEAR_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
