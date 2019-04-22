import { StyleSheet } from 'react-native';
import {
  COLOR,
  PADDING,
  FONT,
  FONT_SIZE,
} from 'constants/globalStyle';

import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    width: '100%',
    backgroundColor: COLOR.primary,
    paddingHorizontal: PADDING.primary,
    paddingVertical: PADDING.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLOR.font_light,
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.primary,
    textAlign: 'center',
  },

  containerLink: {
    width: '100%',
    padding: PADDING.small,
  },
  textLink: {
    color: COLOR.font,
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.small,
    textAlign: 'center',
  },
  indicator: {
    position: 'absolute',
    right: PADDING.big,
  },
});
