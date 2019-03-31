import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {
  testID?: string;
}

export interface IStyle {
  container: ViewStyle;
  text: TextStyle;
}
