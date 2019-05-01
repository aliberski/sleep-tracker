import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { COLOR } from 'constants/globalStyle';
import style from './style';

const FullPageLoader = () => (
  <View style={style.container}>
    <ActivityIndicator size='large' color={COLOR.primary} />
  </View>
);

export default FullPageLoader;
