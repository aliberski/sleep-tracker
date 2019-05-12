import { ActionTypes } from './actions';
import { ISurveyData } from 'modules/Survey/types';

type DataType = number[] | null;

export interface IStatisticsStoreState {
  mood: DataType;
  hours: DataType;
  food: DataType;
  alcohol: DataType;
  caffeine: DataType;
}

export type StatisticsPayload = ISurveyData | {};

export type Actions = IStatisticsCalculate;

export interface IStatisticsCalculate {
  readonly type: ActionTypes.STATISTICS_CALCULATE;
  payload: StatisticsPayload;
}
