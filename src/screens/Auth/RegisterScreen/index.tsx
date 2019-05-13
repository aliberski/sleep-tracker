import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import { TextInput } from 'components/Inputs';
import SafeView from 'components/SafeView';

import { IStoreState } from 'store/appReducer';
import { registerActions } from 'modules/Register/actions';
import texts from 'constants/translations';
import { auth } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

const RegisterScreen = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const { register, isLoading, formError } = props;

  const submit = () => {
    if (password !== passwordRepeat) {
      Alert.alert('', texts.registerNotEqualPasswords, [
        { text: texts.ok, onPress: () => {} },
      ]);
      return;
    }
    register({ email, password });
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
              testID={auth.register.inputPassword}
              onChangeText={setPassword}
              value={password}
              inputProps={{ secureTextEntry: true }}
              label={texts.registerInputPassword}
            />
            <TextInput
              testID={auth.register.inputPasswordRepeat}
              onChangeText={setPasswordRepeat}
              value={passwordRepeat}
              inputProps={{ secureTextEntry: true }}
              label={texts.registerInputPasswordRepeat}
            />
          </KeyboardAwareWrapper>
        </View>
        {!!formError && (
          <Text
            style={style.formError}
            testID={auth.register.error}
          >
            {formError.toUpperCase()}
          </Text>
        )}
        <Button
          testID={auth.register.buttonSubmit}
          onPress={submit}
          text={texts.registerButtonSubmit}
          isLoading={isLoading}
        />
      </View>
    </SafeView>
  );
};

RegisterScreen.navigationOptions = {
  title: texts.registerTitle.toUpperCase(),
};

const mapStateToProps = ({ register }: IStoreState) => ({
  isLoading: register.loading,
  formError: register.error,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      register: registerActions.registerRequest,
    },
    dispatch,
  );

export { RegisterScreen };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen);
