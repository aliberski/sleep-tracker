import React from 'react';
import { Text, View } from 'react-native';

import style from './style';
import { IProps } from './types';

const RegisterScreen = (props: IProps) => {
  return (
    <View style={style.container}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

RegisterScreen.navigationOptions = {
  title: 'Rejestracja',
};

export default RegisterScreen;
