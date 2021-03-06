import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import {
  COLOR,
  FONT,
  PADDING,
  FONT_SIZE,
  WINDOW_WIDTH,
} from 'constants/globalStyle';

export default StyleSheet.create<IStyle>({
  calendar: {
    width: WINDOW_WIDTH,
  },
});

export const theme = {
  textSectionTitleColor: COLOR.font,
  monthTextColor: COLOR.font,
  arrowColor: COLOR.primary,
  textDayFontFamily: FONT.primary,
  todayTextColor: COLOR.primary,
  dotColor: COLOR.primary,
  selectedDayBackgroundColor: COLOR.primary,
  'stylesheet.calendar.header': {
    monthText: {
      fontFamily: FONT.bold,
      margin: PADDING.primary,
      fontSize: FONT_SIZE.primary,
      color: COLOR.font,
    },
    dayHeader: {
      fontFamily: FONT.primary,
      fontSize: FONT_SIZE.primary,
      marginBottom: PADDING.primary,
      color: COLOR.font,
    },
  },
};
