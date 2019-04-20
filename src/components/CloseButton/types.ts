import { ViewStyle } from 'react-native';

export interface IProps {
  onPress: () => void;
  color?: string;
  testID?: string;
  style?: ViewStyle;
}

export interface IStyle {
  close: ViewStyle;
}
