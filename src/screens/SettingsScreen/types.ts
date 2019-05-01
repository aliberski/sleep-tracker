import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {
  email: string;
  dataLoading: boolean;
  fetchData: () => void;
  resetRequest: (email: string) => void;
  resetSuccess: boolean;
}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
}
