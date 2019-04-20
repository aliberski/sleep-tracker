import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  onChange: (isOn: boolean) => void;
  label: string;
}

export interface IState {
  isOn: boolean;
}

export interface IStyle {
  container: ViewStyle;
  label: TextStyle;
  content: ViewStyle;
  no: TextStyle;
  yes: TextStyle;
}
