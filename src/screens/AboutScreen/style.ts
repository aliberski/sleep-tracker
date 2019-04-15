import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import {
  PADDING,
  FONT,
  FONT_SIZE,
  COLOR,
} from 'constants/globalStyle';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    padding: PADDING.primary,
  },
  contentContainer: {
    flexGrow: 1,
  },
  text: {
    fontFamily: FONT.primary,
    fontSize: FONT_SIZE.primary,
    color: COLOR.font,
    paddingBottom: PADDING.big,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: PADDING.big,
    paddingBottom: PADDING.large,
  },
});
