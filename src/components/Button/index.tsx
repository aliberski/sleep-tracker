import React, { memo } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import style from './style';
import { IProps } from './types';

const Button: React.FC<IProps> = (props: IProps) => {
  const { onPress, text, testID, link } = props;
  const containerStyle = link
    ? style.containerLink
    : style.container;
  const textStyle = link ? style.textLink : style.text;
  const buttonStyle = StyleSheet.flatten([
    containerStyle,
    props.style,
  ]);
  return (
    <TouchableOpacity
      testID={testID}
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Button };
export default memo(Button);
