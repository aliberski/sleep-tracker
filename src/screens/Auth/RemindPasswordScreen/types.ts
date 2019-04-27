import { ViewStyle, TextStyle } from 'react-native';
import { INavigation, ErrorType } from 'constants/types';

export interface IProps extends INavigation {
  remindPassword: ({ email: string }: any) => void;
  formError: ErrorType;
  isLoading: boolean;
  success: boolean;
}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
  formError: TextStyle;
}
