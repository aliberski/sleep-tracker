import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { SelectedDayPayload } from 'modules/SelectedDay/types';

export interface IProps extends INavigation {
  selectedDay: SelectedDayPayload;
  fetchSurveyData: () => void;
  fetchProfileData: () => void;
}

export interface IStyle {
  container: ViewStyle;
  content: ViewStyle;
  title: TextStyle;
  day: TextStyle;
  buttons: ViewStyle;
  buttonSurvey: ViewStyle;
}
