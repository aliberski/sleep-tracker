import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import { TextInput } from 'components/Inputs';
import SafeView from 'components/SafeView';

import { IStoreState } from 'store/appReducer';
import texts from 'constants/translations';
import { auth } from 'constants/testIDs';
import { loginActions } from 'modules/Login/actions';
import routes from 'constants/routes';
import style from './style';
import { IProps } from './types';

const LoginScreen = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    props.login({ email, password });
  };

  const {
    navigation: { navigate },
    isLoading,
    formError,
  } = props;
  return (
    <SafeView>
      <View style={style.container} testID={auth.login.id}>
        <View style={style.form}>
          <KeyboardAwareWrapper>
            <TextInput
              testID={auth.login.inputEmail}
              onChangeText={setEmail}
              value={email}
              keyboardType='email-address'
              label={texts.loginInputEmail}
            />
            <TextInput
              testID={auth.login.inputPassword}
              onChangeText={setPassword}
              value={password}
              inputProps={{ secureTextEntry: true }}
              label={texts.loginInputPassword}
            />
            <Button
              testID={auth.login.buttonRemind}
              link
              text={texts.loginButtonRemind}
              onPress={navigate.bind(
                null,
                routes.REMIND_PASSWORD,
              )}
            />
          </KeyboardAwareWrapper>
        </View>
        {!!formError && (
          <Text style={style.formError}>
            {formError.toUpperCase()}
          </Text>
        )}
        <Button
          testID={auth.login.buttonSubmit}
          onPress={submit}
          text={texts.loginButtonSubmit}
          isLoading={isLoading}
        />
      </View>
    </SafeView>
  );
};

LoginScreen.navigationOptions = {
  title: texts.loginTitle.toUpperCase(),
};

const mapStateToProps = ({ login }: IStoreState) => ({
  isLoading: login.loading,
  formError: login.error,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      login: loginActions.loginRequest,
    },
    dispatch,
  );

export { LoginScreen };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
