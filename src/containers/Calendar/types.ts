import { ViewStyle } from 'react-native';
import { SelectedDayPayload } from 'modules/SelectedDay/types';

export interface IProps {
  onSelect: (day: SelectedDayPayload) => void;
  selectedDay: SelectedDayPayload;
  onAfterSelect?: () => void;
  surveyData: any;
  isSurveyLoading: boolean;
}

export interface IState {
  markedDates: {
    [day: string]: IOptions;
  };
  isCalendarMounted: boolean;
}

export interface IOptions {
  selected: boolean;
  marked: boolean;
}

export interface IStyle {
  calendar: ViewStyle;
}

export interface IDay {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}
