import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { IStatisticsStoreState } from 'modules/Statistics/types';

export interface IProps extends INavigation {
  statistics: IStatisticsStoreState;
}

export interface IStyle {
  container: ViewStyle;
  intro: TextStyle;
  charts: ViewStyle;
  chartsContainer: ViewStyle;
}

export interface IChart {
  title: string;
  data: any;
  ticks: number;
  color: string;
  height?: number;
}

export enum ChartHeight {
  small = 100,
  medium = 150,
  big = 300,
}
