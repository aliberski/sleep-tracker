import { StyleSheet } from 'react-native';
import {
  defaultTextStyle,
  PADDING,
  FONT,
  FONT_SIZE,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    padding: PADDING.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...defaultTextStyle,
    fontFamily: FONT.bold,
    paddingBottom: PADDING.large,
    textAlign: 'center',
    fontSize: FONT_SIZE.big,
  },
});
