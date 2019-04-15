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
});
