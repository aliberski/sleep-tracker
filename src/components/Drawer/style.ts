import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import {
  BORDER,
  COLOR,
  FONT,
  PADDING,
  FONT_SIZE,
} from 'constants/globalStyle';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: COLOR.primary,
  },
  navItemText: {
    color: COLOR.font_light,
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.primary,
    padding: PADDING.primary,
  },
  navItem: {
    borderBottomWidth: BORDER.hair,
    borderBottomColor: COLOR.background,
  },
  close: {
    alignSelf: 'flex-end',
    padding: PADDING.primary,
  },
});
