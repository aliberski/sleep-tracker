import { StyleSheet } from 'react-native';
import {
  PADDING,
  FONT,
  COLOR,
  FONT_SIZE,
  BORDER,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderBottomWidth: BORDER.hair,
    borderBottomColor: COLOR.border,
    paddingBottom: 3,
  },
  title: {
    textAlign: 'center',
    fontFamily: FONT.bold,
    color: COLOR.font,
    fontSize: FONT_SIZE.primary,
    paddingVertical: PADDING.primary,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
