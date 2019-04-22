import { ViewStyle, TextStyle } from 'react-native';
import { INavigation, ErrorType } from 'constants/types';
import { ILoginPayload } from 'modules/Login/types';

export interface IProps extends INavigation {
  login: (payload: ILoginPayload) => void;
  isLoading: boolean;
  formError: ErrorType;
}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
  formError: TextStyle;
}
