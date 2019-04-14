import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {}

export interface IState {
  selectedDay: string;
}

export interface IStyle {
  container: ViewStyle;
  content: ViewStyle;
  title: TextStyle;
  day: TextStyle;
  buttons: ViewStyle;
  buttonSurvey: ViewStyle;
}
