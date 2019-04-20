import { StyleSheet } from 'react-native';
import {
  BORDER,
  FONT_SIZE,
  FONT,
  COLOR,
  PADDING,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  input: {
    borderWidth: BORDER.primary,
    borderColor: COLOR.border,
    fontSize: FONT_SIZE.primary,
    fontFamily: FONT.primary,
    width: '100%',
    paddingHorizontal: PADDING.primary,
    paddingVertical: PADDING.medium,
  },
  inputWithError: {
    borderColor: COLOR.error,
  },
  label: {
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.small,
    color: COLOR.font,
    paddingBottom: PADDING.small,
  },
  error: {
    paddingTop: PADDING.small,
    fontFamily: FONT.primary,
    fontSize: FONT_SIZE.small,
    color: COLOR.error,
    paddingBottom: PADDING.small,
  },
});
