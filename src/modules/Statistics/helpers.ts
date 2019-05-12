import moment from 'moment';
import { MoodTypes } from 'components/MoodSelector/types';
import { ISurveyData } from 'modules/Survey/types';
import {
  StatisticsPayload,
  IStatisticsStoreState,
} from './types';

const formatMood = (mood: MoodTypes | null): number => {
  switch (mood) {
    case MoodTypes.bad:
      return 0;
    case MoodTypes.normal:
      return 1;
    case MoodTypes.good:
      return 2;
    default:
      return 0;
  }
};

const roundHalf = (num: number): number =>
  Math.round(num * 2) / 2;

const formatBool = (val: boolean): number => (val ? 1 : 0);

const formatHour = (
  sleepHour: string | null,
  wakeUpHour: string | null,
): number => {
  if (!sleepHour || !wakeUpHour) {
    return 0;
  }
  const [h, m] = sleepHour.split(':');
  const duration = moment(wakeUpHour, 'HH:mm')
    .subtract({ hours: Number(h), minutes: Number(m) })
    .format('HH.mm');
  return roundHalf(parseFloat(duration));
};

export const formatStatisticsPayload = (
  data: StatisticsPayload,
): IStatisticsStoreState => {
  const moodArr: any = [];
  const hoursArr: any = [];
  const foodArr: any = [];
  const alcoholArr: any = [];
  const caffeineArr: any = [];
  Object.values(data).forEach(
    ({
      mood,
      sleepHour,
      wakeUpHour,
      food,
      alcohol,
      caffeine,
    }: ISurveyData) => {
      moodArr.push(formatMood(mood));
      hoursArr.push(formatHour(sleepHour, wakeUpHour));
      foodArr.push(formatBool(food));
      alcoholArr.push(formatBool(alcohol));
      caffeineArr.push(formatBool(caffeine));
    },
  );
  return {
    mood: moodArr,
    hours: hoursArr,
    food: foodArr,
    alcohol: alcoholArr,
    caffeine: caffeineArr,
  };
};
