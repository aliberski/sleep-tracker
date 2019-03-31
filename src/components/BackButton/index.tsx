import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import style from './style';
import { IProps } from './types';

const BackButton = (props: IProps) => {
  const {
    navigation: { goBack },
    testID,
  } = props;
  return (
    <TouchableOpacity
      testID={testID}
      style={style.container}
      onPress={() => goBack()}
    >
      <Text style={style.text}>{`<   Wróć`}</Text>
    </TouchableOpacity>
  );
};

export default BackButton;
