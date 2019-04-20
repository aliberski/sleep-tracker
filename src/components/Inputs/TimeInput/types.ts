import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  onSelect: (time: string) => void;
  value: string | null;
  label: string;
  testID?: string;
  valueTestID?: string;
}

export interface IState {
  isVisible: boolean;
}

export interface IStyle {
  container: ViewStyle;
  input: ViewStyle;
  label: TextStyle;
  value: TextStyle;
  inputWrapper: ViewStyle;
}
