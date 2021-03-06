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
  formError: {
    ...formErrorStyle,
    textAlign: 'center',
  },
});
