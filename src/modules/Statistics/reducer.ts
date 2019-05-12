import { ActionTypes } from './actions';
import { formatStatisticsPayload } from './helpers';
import {
  Actions,
  StatisticsPayload,
  IStatisticsStoreState,
} from './types';

const initialState: IStatisticsStoreState = {
  mood: [],
  hours: [],
  food: [],
  alcohol: [],
  caffeine: [],
};

const statistics = (
  state: StatisticsPayload = initialState,
  action: Actions,
): IStatisticsStoreState | {} => {
  switch (action.type) {
    case ActionTypes.STATISTICS_CALCULATE:
      return formatStatisticsPayload(action.payload);
    default:
      return state;
  }
};

export default statistics;
