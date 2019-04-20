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
  title: {
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.big,
    color: COLOR.primary,
    textAlign: 'center',
    paddingBottom: PADDING.primary,
  },
  button: {
    position: 'absolute',
    top: 0,
    right: 0,
    // @ts-ignore
    width: null,
  },
});
