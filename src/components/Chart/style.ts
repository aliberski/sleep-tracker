import { StyleSheet } from 'react-native';
import {
  PADDING,
  defaultTextStyle,
  FONT,
  COLOR,
  FONT_SIZE,
  BORDER,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    marginBottom: PADDING.big,
  },
  chartWrapper: {
    flexDirection: 'row',
  },
  title: {
    ...defaultTextStyle,
    fontFamily: FONT.bold,
    paddingBottom: PADDING.small,
  },
  chart: {
    flex: 1,
    marginLeft: PADDING.medium,
  },
  grid: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    paddingVertical: PADDING.primary,
    marginLeft: PADDING.big,
  },
  line: {
    width: '100%',
    height: BORDER.primary,
    backgroundColor: COLOR.border,
  },
});

export const yAxisStyle = {
  fill: COLOR.disabled,
  fontSize: FONT_SIZE.small,
};

export const contentInsetStyle = {
  top: PADDING.primary,
  bottom: PADDING.primary,
};

export const defaultColor = COLOR.primary;
