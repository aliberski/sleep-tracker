import React, { useState /* useEffect */ } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from 'components/Button';
import Input from 'components/Input';

import { idAuth } from 'constants/testIDs';
import { testActions } from 'modules/Test/actions';
import routes from 'constants/routes';
import style from './style';
import { IProps, IDispatchProps } from './types';

const LoginScreen = (props: IProps) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // useEffect(() => {
  //   props.testRequest();
  // }, []);
  const {
    navigation: { navigate },
  } = props;
  return (
    <View
      style={style.container}
      testID={idAuth.loginScreen}
    >
      <View style={style.form}>
        <Input
          onChangeText={setLogin}
          value={login}
          label='Login'
        />
        <Input
          onChangeText={setPassword}
          value={password}
          label='Password'
        />
      </View>
      <Button
        onPress={navigate.bind(null, routes.MAIN)} // TODO: handle login
        text='Zaloguj się'
      />
    </View>
  );
};

LoginScreen.navigationOptions = {
  title: 'Logowanie',
};

/* istanbul ignore next */
const mapDispatchToProps = (
  dispatch: Dispatch<any>,
): IDispatchProps => ({
  testRequest: () => dispatch(testActions.test()),
});

export { LoginScreen };
export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
