import { ViewStyle } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

export interface IProps {
  navigation: NavigationScreenProp<any>;
}

export interface IStyle {
  container: ViewStyle;
}
