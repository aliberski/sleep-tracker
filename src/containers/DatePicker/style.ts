import { StyleSheet } from 'react-native';
import {
  BORDER,
  COLOR,
  PADDING,
  FONT,
  FONT_SIZE,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: BORDER.hair,
    borderTopColor: COLOR.border,
    borderBottomWidth: BORDER.hair,
    borderBottomColor: COLOR.border,
    padding: PADDING.primary,
  },
  title: {
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.big,
    color: COLOR.primary,
  },
  dateButton: {
    // @ts-ignore
    width: null,
  },
});
