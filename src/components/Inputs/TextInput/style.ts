import { StyleSheet } from 'react-native';
import {
  FONT_SIZE,
  FONT,
  COLOR,
  PADDING,
  labelStyle,
  inputStyle,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  input: inputStyle,
  inputWithError: {
    borderColor: COLOR.error,
  },
  inputDisabled: {
    backgroundColor: COLOR.disabled,
  },
  label: labelStyle,
  error: {
    paddingTop: PADDING.small,
    fontFamily: FONT.primary,
    fontSize: FONT_SIZE.small,
    color: COLOR.error,
    paddingBottom: PADDING.small,
  },
});
