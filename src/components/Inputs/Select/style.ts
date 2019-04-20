import { StyleSheet } from 'react-native';
import {
  labelStyle,
  inputStyle,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    width: '100%',
  },
  label: labelStyle,
});

export const pickerStyle = StyleSheet.create({
  inputIOS: inputStyle,
  inputAndroid: inputStyle,
});
