import { INavigation } from 'constants/types';
import { ViewStyle } from 'react-native';

export interface IProps extends INavigation {}

export interface IState {
  weight: string;
  height: string;
  age: string;
  activity: string | null;
}

export interface IStyle {
  container: ViewStyle;
}
