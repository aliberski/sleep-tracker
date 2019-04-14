import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Calendar from 'components/Calendar';

import style from './style';
import { IProps } from './types';

const MainScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Calendar />
    </View>
  );
};

export { MainScreen };
export default connect()(MainScreen);
