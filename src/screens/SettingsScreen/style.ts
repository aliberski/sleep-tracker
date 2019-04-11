import { StyleSheet } from 'react-native';
import { IStyle } from './types';
import { PADDING } from 'constants/globalStyle';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    padding: PADDING.primary,
  },
  form: {
    flex: 1,
  },
});
