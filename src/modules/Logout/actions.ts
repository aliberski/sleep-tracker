import { createAction } from 'redux-actions';

export enum ActionTypes {
  LOGOUT = 'LOGOUT',
}

export const logoutActions = {
  logout: createAction(ActionTypes.LOGOUT),
};
