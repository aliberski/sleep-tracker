import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import { TextInput } from 'components/Inputs';
import Button from 'components/Button';
import SafeView from 'components/SafeView';

import texts from 'constants/translations';
import routes from 'constants/routes';
import { auth } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

const RemindPasswordScreen = (props: IProps) => {
  const [email, setEmail] = useState('');
  const { navigation } = props;
  const { navigate } = navigation;
  return (
    <SafeView>
      <View
        style={style.container}
        testID={auth.remindPassword.id}
      >
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
        <Button
          testID={auth.remindPassword.buttonSubmit}
          onPress={navigate.bind(null, routes.LOGIN)} // TODO: handle submit
          text={texts.remindButtonSubmit}
        />
      </View>
    </SafeView>
  );
};

RemindPasswordScreen.navigationOptions = {
  title: texts.remindTitle.toUpperCase(),
};

export { RemindPasswordScreen };
export default connect()(RemindPasswordScreen);
