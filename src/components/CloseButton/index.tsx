import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { IconClose } from 'components/Icons';

import style from './style';
import { IProps } from './types';

const CloseButton = (props: IProps) => {
  const { onPress, color, testID } = props;
  const closeStyle = StyleSheet.flatten([
    style.close,
    props.style,
  ]);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={closeStyle}
      testID={testID}
    >
      <IconClose color={color} />
    </TouchableOpacity>
  );
};

export default memo(CloseButton);
