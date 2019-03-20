import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import { IProps } from './types';

const Component = (props: IProps) => {
  console.log(props);
  return (
    <View style={style.container}>
      <Text>Component</Text>
    </View>
  );
};

export default Component;
