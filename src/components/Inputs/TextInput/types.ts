import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  label?: string;
  containerStyle?: any;
  inputProps?: any;
  testID?: string;
  keyboardType?: string;
}

type InputType = ViewStyle | TextStyle;

export interface IStyle {
  label: TextStyle;
  input: InputType;
  inputWithError: InputType;
  error: TextStyle;
}
