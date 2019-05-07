import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';
import {
  ISurveyFormPayload,
  ISurveyData,
} from 'modules/Survey/types';
import { SelectedDayPayload } from 'modules/SelectedDay/types';

export interface IProps extends INavigation {
  fetchData: () => void;
  submit: (surveyData: ISurveyFormPayload) => void;
  selectedDay: SelectedDayPayload;
  dataLoading: boolean;
  submitLoading: boolean;
  submitSuccess: boolean;
  data: any;
}
export interface IStyle {
  container: ViewStyle;
  intro: TextStyle;
}

export interface IFormProps {
  onSubmit: (values: IFormState) => void;
  data: ISurveyData;
  submitLoading: boolean;
  selectedDay: SelectedDayPayload;
}

export interface IFormState extends ISurveyData {}

export interface IFormStyle {
  container: ViewStyle;
  form: ViewStyle;
}
