import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import Input from 'components/Input';
import SafeView from 'components/SafeView';

import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

const SettingsScreen = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeView>
      <View
        style={style.container}
        testID={app.settings.id}
      >
        <View style={style.form}>
          <KeyboardAwareWrapper>
            <Input
              testID={app.settings.inputEmail}
              onChangeText={setEmail}
              value={email}
              label={texts.settingsInputEmail}
            />
            <Input
              testID={app.settings.inputLogin}
              onChangeText={setLogin}
              value={login}
              label={texts.settingsInputLogin}
            />
            <Input
              testID={app.settings.inputPassword}
              onChangeText={setPassword}
              value={password}
              inputProps={{ secureTextEntry: true }}
              label={texts.settingsInputPassword}
            />
          </KeyboardAwareWrapper>
        </View>
        <Button
          testID={app.settings.buttonSubmit}
          onPress={() => {}} // TODO: handle submit
          text={texts.settingsButtonSubmit}
        />
      </View>
    </SafeView>
  );
};

SettingsScreen.navigationOptions = {
  title: texts.settingsTitle,
};

export { SettingsScreen };
export default connect()(SettingsScreen);
