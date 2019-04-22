import { StyleSheet } from 'react-native';
import {
  PADDING,
  formErrorStyle,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    padding: PADDING.primary,
  },
  form: {
    flex: 1,
  },
  formError: {
    ...formErrorStyle,
    textAlign: 'center',
  },
});
