import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { IRegisterPayload } from 'modules/Register/types';

export interface IProps extends INavigation {
  register: (payload: IRegisterPayload) => void;
}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
}
