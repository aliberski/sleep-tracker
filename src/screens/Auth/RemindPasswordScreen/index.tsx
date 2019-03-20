import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import { IProps } from './types';

const RemindPasswordScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>RemindPasswordScreen</Text>
    </View>
  );
};

export default RemindPasswordScreen;
