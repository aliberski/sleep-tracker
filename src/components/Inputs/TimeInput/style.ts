import { StyleSheet } from 'react-native';
import {
  inputStyle,
  labelStyle,
  PADDING,
  defaultTextStyle,
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
  value: defaultTextStyle,
  inputWrapper: {
    paddingBottom: PADDING.big,
  },
});
