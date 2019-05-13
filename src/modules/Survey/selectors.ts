import { ISelectedDayStoreState } from 'modules/SelectedDay/types';
import { ISurveyStoreState } from './types';

export const surveyFormDataSelector = (
  survey: ISurveyStoreState,
  selectedDay: ISelectedDayStoreState,
) => {
  const {
    data: { surveyData },
  }: any = survey;
  return (
    surveyData && selectedDay && surveyData[selectedDay]
  );
};
