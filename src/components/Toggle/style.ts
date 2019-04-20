import { StyleSheet } from 'react-native';
import { COLOR } from 'constants/globalStyle';
import { IStyle } from './types';

export const SIZE = 30;
export const SPACING = 10;

export const SWITCH_SIZE = SIZE - SPACING;

export default StyleSheet.create<IStyle>({
  container: {
    width: SIZE * 2 - SPACING,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: COLOR.border,
  },
  toggle: {
    width: SWITCH_SIZE,
    height: SWITCH_SIZE,
    borderRadius: SWITCH_SIZE / 2,
    backgroundColor: COLOR.primary,
  },
  toggleWrapper: {
    overflow: 'hidden',
    borderRadius: SWITCH_SIZE / 2,
    position: 'absolute',
    top: SPACING / 2,
    left: SPACING / 2,
  },
});
