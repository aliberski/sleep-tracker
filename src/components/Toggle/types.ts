import { ViewStyle } from 'react-native';

export interface IProps {
  value: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  testID?: string;
}

export interface IStyle {
  container: ViewStyle;
  toggle: ViewStyle;
  toggleWrapper: ViewStyle;
}
