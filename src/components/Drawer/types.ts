import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {
  logout: () => void;
}

export interface IStyle {
  container: ViewStyle;
  navItem: ViewStyle;
  navItemText: TextStyle;
  close: ViewStyle;
}

export interface INavItem {
  text: string;
  onPress: () => void;
  testID: string;
}
