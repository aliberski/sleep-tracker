import { ActionTypes } from './actions';

export type Actions = ILogout;

export interface ILogout {
  readonly type: ActionTypes.LOGOUT;
}
