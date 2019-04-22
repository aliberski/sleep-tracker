import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  text: string;
  onPress: () => void;
  testID?: string;
  link?: boolean;
  style?: ViewStyle;
  isLoading?: boolean;
}

export interface IStyle {
  container: ViewStyle;
  text: TextStyle;
  containerLink: ViewStyle;
  textLink: TextStyle;
  indicator: ViewStyle;
}
