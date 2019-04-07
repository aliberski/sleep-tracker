import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import Input from 'components/Input';
import SafeView from 'components/SafeView';

import texts from 'constants/translations';
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
    <SafeView>
      <View
        style={style.container}
        testID={auth.register.id}
      >
        <View style={style.form}>
          <KeyboardAwareWrapper>
            <Input
              testID={auth.register.inputEmail}
              onChangeText={setEmail}
              value={email}
              label={texts.registerInputEmail}
            />
            <Input
              testID={auth.register.inputLogin}
              onChangeText={setLogin}
              value={login}
              label={texts.registerInputLogin}
            />
            <Input
              testID={auth.register.inputPassword}
              onChangeText={setPassword}
              value={password}
              inputProps={{ secureTextEntry: true }}
              label={texts.registerInputPassword}
            />
          </KeyboardAwareWrapper>
        </View>
        <Button
          testID={auth.register.buttonSubmit}
          onPress={navigate.bind(null, routes.LOGIN)} // TODO: handle register
          text={texts.registerButtonSubmit}
        />
      </View>
    </SafeView>
  );
};

RegisterScreen.navigationOptions = {
  title: texts.registerTitle,
};

export { RegisterScreen };
export default connect()(RegisterScreen);
