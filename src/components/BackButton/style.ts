import { StyleSheet } from 'react-native';
import {
  PADDING,
  COLOR,
  FONT,
  FONT_SIZE,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    paddingHorizontal: PADDING.primary,
    paddingVertical: PADDING.medium,
  },
  text: {
    color: COLOR.font,
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.primary,
  },
});
