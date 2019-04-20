import { StyleSheet } from 'react-native';
import {
  FONT,
  FONT_SIZE,
  COLOR,
  PADDING,
} from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: FONT.bold,
    fontSize: FONT_SIZE.small,
    color: COLOR.font,
    paddingBottom: PADDING.small,
  },
});

export const pickerStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'red',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
