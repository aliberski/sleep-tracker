import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { MoodTypes } from 'components/MoodSelector/types';

export interface IProps extends INavigation {}

export interface IState {
  selectedDay: string;
  isModalVisible: boolean;
  isLayoutReady: boolean;
}

export interface IStyle {
  container: ViewStyle;
  title: TextStyle;
  dateButton: ViewStyle;
  intro: TextStyle;
  header: ViewStyle;
}

export interface IFormProps {
  onSubmit: (values: IFormState) => void;
}

export interface IFormState {
  mood: MoodTypes | null;
  sleepHour: string | null;
  wakeUpHour: string | null;
  food: boolean;
  alcohol: boolean;
  caffeine: boolean;
}

export interface IFormStyle {
  container: ViewStyle;
  form: ViewStyle;
}