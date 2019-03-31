import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import style from './style';
import { IProps } from './types';

const Button: React.FC<IProps> = (props: IProps) => {
  const { onPress, text, testID } = props;
  return (
    <TouchableOpacity
      testID={testID}
      style={style.container}
      onPress={onPress}
    >
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Button };
export default memo(Button);
