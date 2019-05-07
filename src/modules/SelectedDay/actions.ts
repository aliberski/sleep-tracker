import { createAction } from 'redux-actions';
import { SelectedDayPayload } from './types';

export enum ActionTypes {
  SELECT_DAY = 'SELECT_DAY',
}

export const selectedDayActions = {
  selectDay: createAction(
    ActionTypes.SELECT_DAY,
    (payload: SelectedDayPayload) => payload,
  ),
};
