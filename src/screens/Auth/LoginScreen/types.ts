import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IDispatchProps {
  testRequest: () => void;
}

export interface IProps
  extends INavigation,
    IDispatchProps {}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
}
