import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {
  email: string;
  dataLoading: boolean;
  fetchData: () => void;
}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
}
