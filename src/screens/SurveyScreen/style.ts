import { StyleSheet } from 'react-native';
import { IStyle, IFormStyle } from './types';
import {
  PADDING,
  FONT,
  FONT_SIZE,
  COLOR,
  BORDER,
} from 'constants/globalStyle';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
  },
  intro: {
    fontFamily: FONT.primary,
    fontSize: FONT_SIZE.primary,
    color: COLOR.font,
    paddingVertical: PADDING.primary,
    paddingHorizontal: PADDING.large,
    textAlign: 'center',
  },
});

export const formStyle = StyleSheet.create<IFormStyle>({
  container: {
    flex: 1,
    padding: PADDING.primary,
  },
  form: {
    flex: 1,
  },
});
