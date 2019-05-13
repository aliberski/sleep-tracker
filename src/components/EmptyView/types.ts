import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  text: string;
  buttonText: string;
  onButtonPress: () => void;
  testID?: string;
  buttonTestID?: string;
}

export interface IStyle {
  container: ViewStyle;
  text: TextStyle;
}
