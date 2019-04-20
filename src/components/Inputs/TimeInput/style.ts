import { StyleSheet } from 'react-native';
import {
  inputStyle,
  labelStyle,
  PADDING,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: inputStyle,
  label: labelStyle,
  value: {},
  inputWrapper: {
    paddingBottom: PADDING.big,
  },
});
