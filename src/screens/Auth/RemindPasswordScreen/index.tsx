import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Input from 'components/Input';
import Button from 'components/Button';
import BackButton from 'components/BackButton';

import routes from 'constants/routes';
import { auth } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

const RemindPasswordScreen = (props: IProps) => {
  const [email, setEmail] = useState('');
  // useEffect(() => {
  //   props.testRequest();
  // }, []);
  const { navigation } = props;
  const { navigate } = navigation;
  return (
    <>
      <BackButton
        navigation={navigation}
        testID={auth.remindPassword.buttonBack}
      />
      <View
        style={style.container}
        testID={auth.remindPassword.id}
      >
        <View style={style.form}>
          <KeyboardAwareWrapper>
            <Input
              testID={auth.remindPassword.inputEmail}
              onChangeText={setEmail}
              value={email}
              label='Email'
            />
          </KeyboardAwareWrapper>
        </View>
        <Button
          testID={auth.remindPassword.buttonSubmit}
          onPress={navigate.bind(null, routes.LOGIN)} // TODO: handle submit
          text='Przypomnij hasło'
        />
      </View>
    </>
  );
};

export { RemindPasswordScreen };
export default connect()(RemindPasswordScreen);
