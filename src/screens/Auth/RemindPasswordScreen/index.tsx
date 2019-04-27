import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import { TextInput } from 'components/Inputs';
import Button from 'components/Button';
import SafeView from 'components/SafeView';

import { remindPasswordActions } from 'modules/RemindPassword/actions';
import { IStoreState } from 'store/appReducer';
import texts from 'constants/translations';
import routes from 'constants/routes';
import { auth } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

const RemindPasswordScreen = (props: IProps) => {
  const [email, setEmail] = useState('');
  const {
    navigation: { navigate },
    formError,
    remindPassword,
    isLoading,
  } = props;

  useEffect(() => {
    if (props.success) {
      Alert.alert(texts.remindSuccessMessage, '', [
        {
          text: texts.ok,
          onPress: () => {
            navigate(routes.LOGIN);
          },
        },
      ]);
    }
  });

  const submit = () => {
    remindPassword({ email });
  };

  return (
    <SafeView>
      <View style={style.container} testID={auth.remindPassword.id}>
        <View style={style.form}>
          <KeyboardAwareWrapper>
            <TextInput
              testID={auth.remindPassword.inputEmail}
              onChangeText={setEmail}
              value={email}
              label={texts.remindInputEmail}
            />
          </KeyboardAwareWrapper>
        </View>
        {!!formError && (
          <Text style={style.formError}>
            {formError.toUpperCase()}
          </Text>
        )}
        <Button
          testID={auth.remindPassword.buttonSubmit}
          onPress={submit}
          isLoading={isLoading}
          text={texts.remindButtonSubmit}
        />
      </View>
    </SafeView>
  );
};

RemindPasswordScreen.navigationOptions = {
  title: texts.remindTitle.toUpperCase(),
};

const mapStateToProps = ({ remindPassword }: IStoreState) => ({
  isLoading: remindPassword.loading,
  formError: remindPassword.error,
  success: remindPassword.success,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      remindPassword: remindPasswordActions.remindPasswordRequest,
    },
    dispatch,
  );

export { RemindPasswordScreen };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemindPasswordScreen);
