import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import {
  ICON_SIZE,
  PADDING,
  labelStyle,
} from 'constants/globalStyle';

export const SIZE = ICON_SIZE.large;

export default StyleSheet.create<IStyle>({
  container: {
    paddingBottom: PADDING.big,
  },
  label: labelStyle,
  buttons: {
    flexDirection: 'row',
  },
  button: {
    marginRight: PADDING.big,
  },
});
