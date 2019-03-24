import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { idAuth } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

const RegisterScreen = (props: IProps) => {
  return (
    <View style={style.container} testID={idAuth.registerScreen}>
      <Text>RegisterScreen</Text>
    </View>
  );
};

RegisterScreen.navigationOptions = {
  title: 'Rejestracja',
};

export { RegisterScreen };
export default connect()(RegisterScreen);
