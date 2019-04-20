import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  items: IOption[];
  onChange: (value: string) => void;
  value: string | null;
  label?: string;
}

export interface IOption {
  label: string;
  value: string;
}

export interface IStyle {
  container: ViewStyle;
  label: TextStyle;
}
