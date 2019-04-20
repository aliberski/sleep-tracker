import { StyleSheet } from 'react-native';
import { PADDING } from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  close: {
    padding: PADDING.primary,
  },
});
