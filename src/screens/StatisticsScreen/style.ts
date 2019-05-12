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
  },
  intro: {
    fontFamily: FONT.primary,
    fontSize: FONT_SIZE.primary,
    color: COLOR.font,
    paddingVertical: PADDING.primary,
    paddingHorizontal: PADDING.large,
    textAlign: 'center',
  },
  charts: {
    flex: 1,
    padding: PADDING.primary,
  },
  chartsContainer: {
    flexGrow: 1,
  },
});
