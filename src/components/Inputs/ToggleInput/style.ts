import { StyleSheet } from 'react-native';
import {
  labelStyle,
  PADDING,
  COLOR,
} from 'constants/globalStyle';
import { IStyle } from './types';

const textStyle = {
  ...labelStyle,
  color: COLOR.border,
  paddingBottom: 0,
};

export default StyleSheet.create<IStyle>({
  container: {
    paddingBottom: PADDING.big,
  },
  label: labelStyle,
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  no: {
    ...textStyle,
    paddingRight: PADDING.primary,
  },
  yes: {
    ...textStyle,
    paddingLeft: PADDING.primary,
  },
});
