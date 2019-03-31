import { StyleSheet } from 'react-native';
import { PADDING } from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    padding: PADDING.primary,
  },
  form: {
    flex: 1,
  },
});
