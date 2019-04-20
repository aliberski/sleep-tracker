import { Dimensions, StyleSheet } from 'react-native';
import { IconBackArrow } from 'components/Icons';

export const COLOR = {
  primary: '#6666EE',
  primary_variant: '#3700B3',
  secondary: '#03DAC6',
  secondary_variant: '#018786',
  background: '#FFFFFF',
  error: '#B00020',

  font: '#000000',
  font_light: '#FFFFFF',
  border: '#B4B4B4',
};

export const PADDING = {
  primary: 10,
  small: 5,
  medium: 15,
  big: 20,
  large: 40,
};

export const BORDER = {
  primary: 1,
  small: 0.5,
  hair: StyleSheet.hairlineWidth,
};

export const FONT = {
  primary: 'Roboto-Regular',
  light: 'Roboto-Light',
  italic: 'Roboto-Italic',
  bold: 'Roboto-Bold',
  black: 'Roboto-Black',
};

export const FONT_SIZE = {
  primary: 15,
  small: 13,
  big: 20,
};

export const ICON_SIZE = {
  primary: 20,
  small: 15,
  big: 25,
  large: 40,
};

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const DRAWER_WIDTH = WINDOW_WIDTH * 0.7;

export const tabBarOptions = {
  labelStyle: {
    fontFamily: FONT.primary,
    fontSize: FONT_SIZE.small,
    color: COLOR.font_light,
  },
  indicatorStyle: {
    backgroundColor: COLOR.primary_variant,
  },
  style: {
    backgroundColor: COLOR.primary,
  },
};

export const standardHeaderOptions = {
  headerTintColor: COLOR.primary,
  headerTitleStyle: {
    fontSize: FONT_SIZE.primary,
    fontFamily: FONT.primary,
    color: COLOR.font,
  },
  headerBackImage: IconBackArrow,
};
