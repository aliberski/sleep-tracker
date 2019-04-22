import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { ILoginPayload } from 'modules/Login/types';

export interface IProps extends INavigation {
  login: (payload: ILoginPayload) => void;
}

export interface IStyle {
  container: ViewStyle;
  form: ViewStyle;
}
