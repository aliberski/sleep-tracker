import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import { IProps } from './types';

const MainScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>MainScreen</Text>
    </View>
  );
};

export default MainScreen;
