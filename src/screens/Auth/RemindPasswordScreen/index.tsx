import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import style from './style';
import { IProps } from './types';

const RemindPasswordScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>RemindPasswordScreen</Text>
    </View>
  );
};

export { RemindPasswordScreen };
export default connect()(RemindPasswordScreen);
