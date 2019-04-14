import { StyleSheet } from 'react-native';
import {
  COLOR,
  FONT_SIZE,
  FONT,
  PADDING,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
  },
  title: {
    color: COLOR.font,
    fontSize: FONT_SIZE.primary,
    fontFamily: FONT.bold,
  },
  content: {
    flex: 1,
    padding: PADDING.primary,
  },
  day: {
    fontSize: FONT_SIZE.big,
    color: COLOR.primary,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSurvey: {
    marginBottom: PADDING.medium,
    backgroundColor: COLOR.primary_variant,
  },
});
