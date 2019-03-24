import { StyleSheet } from 'react-native';
import { COLOR, PADDING, FONT, FONT_SIZE } from 'constants/globalStyle';

import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    width: '100%',
    backgroundColor: COLOR.primary,
    paddingHorizontal: PADDING.primary,
    paddingVertical: PADDING.medium,
  },
  text: {
    color: COLOR.font_light,
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.primary,
    textAlign: 'center',
  },
});
