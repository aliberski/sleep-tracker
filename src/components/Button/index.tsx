import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import style from './style';
import { IProps } from './types';

const Button = (props: IProps) => {
  const { onPress, text } = props;
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Button };
export default memo(Button);
