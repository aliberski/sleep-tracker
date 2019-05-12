import { createAction } from 'redux-actions';
import { StatisticsPayload } from './types';

export enum ActionTypes {
  STATISTICS_CALCULATE = 'STATISTICS - calculate',
}

export const statisticsActions = {
  calculate: createAction(
    ActionTypes.STATISTICS_CALCULATE,
    (payload: StatisticsPayload) => payload,
  ),
};
