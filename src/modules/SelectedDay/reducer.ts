import { ActionTypes } from './actions';
import { Actions, SelectedDayPayload } from './types';

const selectedDay = (
  state: SelectedDayPayload = null,
  action: Actions,
): SelectedDayPayload => {
  switch (action.type) {
    case ActionTypes.SELECT_DAY:
      return action.payload;
    default:
      return state;
  }
};

export default selectedDay;
