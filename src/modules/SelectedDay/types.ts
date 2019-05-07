import { ActionTypes } from './actions';

export type ISelectedDayStoreState = SelectedDayPayload;

export type SelectedDayPayload = string | null;

export type Actions = ISelectDay;

export interface ISelectDay {
  readonly type: ActionTypes.SELECT_DAY;
  payload: SelectedDayPayload;
}
