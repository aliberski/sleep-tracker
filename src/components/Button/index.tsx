import React, { memo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import style from './style';
import { IProps } from './types';

const Button: React.FC<IProps> = (props: IProps) => {
  const { onPress, text, testID, link } = props;
  const containerStyle = link
    ? style.containerLink
    : style.container;
  const textStyle = link ? style.textLink : style.text;

  return (
    <TouchableOpacity
      testID={testID}
      style={containerStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export { Button };
export default memo(Button);
