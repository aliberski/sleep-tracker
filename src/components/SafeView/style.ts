import { StyleSheet } from 'react-native';
import { COLOR } from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
});
