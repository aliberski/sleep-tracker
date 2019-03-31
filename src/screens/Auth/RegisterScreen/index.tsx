import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import Input from 'components/Input';

import routes from 'constants/routes';
import { auth } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

const RegisterScreen = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const {
    navigation: { navigate },
  } = props;

  return (
    <View style={style.container} testID={auth.register.id}>
      <View style={style.form}>
        <KeyboardAwareWrapper>
          <Input
            testID={auth.register.inputEmail}
            onChangeText={setEmail}
            value={email}
            label='Email'
          />
          <Input
            testID={auth.register.inputLogin}
            onChangeText={setLogin}
            value={login}
            label='Login'
          />
          <Input
            testID={auth.register.inputPassword}
            onChangeText={setPassword}
            value={password}
            inputProps={{ secureTextEntry: true }}
            label='Hasło'
          />
        </KeyboardAwareWrapper>
      </View>
      <Button
        testID={auth.register.buttonSubmit}
        onPress={navigate.bind(null, routes.LOGIN)} // TODO: handle register
        text='Zaloguj się'
      />
    </View>
  );
};

RegisterScreen.navigationOptions = {
  title: 'Rejestracja',
};

export { RegisterScreen };
export default connect()(RegisterScreen);
