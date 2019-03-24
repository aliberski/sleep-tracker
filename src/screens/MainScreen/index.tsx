import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import style from './style';
import { IProps } from './types';

const MainScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>MainScreen</Text>
    </View>
  );
};

export { MainScreen };
export default connect()(MainScreen);
