import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  text: string;
  onPress: () => void;
  testID?: string;
}

export interface IStyle {
  container: ViewStyle;
  text: TextStyle;
}
