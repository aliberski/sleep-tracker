import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {}

export interface IState {
  selectedDay: string;
  isModalVisible: boolean;
  isLayoutReady: boolean;
}

export interface IStyle {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
}
