import { ViewStyle, TextStyle } from 'react-native';
import { INavigation, ErrorType } from 'constants/types';
import { IRegisterPayload } from 'modules/Register/types';

export interface IProps extends INavigation {
  register: (payload: IRegisterPayload) => void;
  isLoading: boolean;
  formError: ErrorType;
}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
  formError: TextStyle;
}
