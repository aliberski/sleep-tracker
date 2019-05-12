import { ViewStyle, TextStyle } from 'react-native';
import { INavigation, ErrorType } from 'constants/types';
import { IProfileFormPayload } from 'modules/Profile/types';

export interface IProps extends INavigation {
  inputs: IProfileFormPayload;
  inputsLoading: boolean;

  submitLoading: boolean;
  submitSuccess: boolean;
  submitError: ErrorType;

  submit: (payload: IProfileFormPayload) => void;
}

export interface IState {
  weight: string;
  height: string;
  age: string;
  activity: string | null;
}

export interface IStyle {
  container: ViewStyle;
  formError: TextStyle;
}

export enum ActivityType {
  low = 'low',
  average = 'average',
  high = 'high',
}
