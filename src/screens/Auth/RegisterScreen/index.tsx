import React, { useState } from 'react';
import { View } from 'react-native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import { TextInput } from 'components/Inputs';
import SafeView from 'components/SafeView';

import { registerActions } from 'modules/Register/actions';
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
    register,
  } = props;

  const submit = () => {
    register({ email, password });
    // TODO:
    navigate.bind(null, routes.LOGIN);
  };

  return (
    <SafeView>
      <View
        style={style.container}
        testID={auth.register.id}
      >
        <View style={style.form}>
          <KeyboardAwareWrapper>
            <TextInput
              testID={auth.register.inputEmail}
              onChangeText={setEmail}
              value={email}
              keyboardType='email-address'
              label={texts.registerInputEmail}
            />
            <TextInput
              testID={auth.register.inputLogin}
              onChangeText={setLogin}
              value={login}
              label={texts.registerInputLogin}
            />
            <TextInput
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
          onPress={submit}
          text={texts.registerButtonSubmit}
        />
      </View>
    </SafeView>
  );
};

RegisterScreen.navigationOptions = {
  title: texts.registerTitle.toUpperCase(),
};

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      register: registerActions.registerRequest,
    },
    dispatch,
  );

export { RegisterScreen };
export default connect(
  null,
  mapDispatchToProps,
)(RegisterScreen);
