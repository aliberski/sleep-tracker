import { ViewStyle, TextStyle } from 'react-native';
import { SelectedDayPayload } from 'modules/SelectedDay/types';

export interface IProps {
  selectedDay: SelectedDayPayload;
}

export interface IState {
  isLayoutReady: boolean;
  isModalVisible: boolean;
}

export interface IStyle {
  container: ViewStyle;
  title: TextStyle;
  dateButton: ViewStyle;
  header: ViewStyle;
}
