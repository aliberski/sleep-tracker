import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import {
  ICON_SIZE,
  FONT,
  FONT_SIZE,
  COLOR,
  PADDING,
} from 'constants/globalStyle';

export const SIZE = ICON_SIZE.large;

export default StyleSheet.create<IStyle>({
  container: {
    paddingBottom: PADDING.primary,
  },
  label: {
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.small,
    color: COLOR.font,
    paddingBottom: PADDING.primary,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginRight: PADDING.big,
  },
});
