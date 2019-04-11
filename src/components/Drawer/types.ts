import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {}

export interface IStyle {
  container: ViewStyle;
  navItem: ViewStyle;
  navItemText: TextStyle;
}

export interface INavItem {
  text: string;
  onPress: () => void;
  testID: string;
}
