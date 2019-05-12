import { IStatisticsStoreState } from 'modules/Statistics/types';
import texts from 'constants/translations';
import { COLOR } from 'constants/globalStyle';
import { IChart, ChartHeight } from './types';

export const getChartsData = (
  statistics: IStatisticsStoreState,
): IChart[] => {
  const {
    mood,
    hours,
    food,
    alcohol,
    caffeine,
  } = statistics;

  return [
    {
      title: texts.statisticsLabelMood,
      data: mood,
      ticks: 3,
      height: ChartHeight.medium,
      color: COLOR.charts.mood,
    },
    {
      title: texts.statisticsLabelHours,
      data: hours,
      ticks: 24,
      height: ChartHeight.big,
      color: COLOR.charts.hours,
    },
    {
      title: texts.statisticsLabelFood,
      data: food,
      ticks: 2,
      height: ChartHeight.small,
      color: COLOR.charts.food,
    },
    {
      title: texts.statisticsLabelAlcohol,
      data: alcohol,
      ticks: 2,
      height: ChartHeight.small,
      color: COLOR.charts.alcohol,
    },
    {
      title: texts.statisticsLabelCaffeine,
      data: caffeine,
      ticks: 2,
      height: ChartHeight.small,
      color: COLOR.charts.caffeine,
    },
  ];
};
