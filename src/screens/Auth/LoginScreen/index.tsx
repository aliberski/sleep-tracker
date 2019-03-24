import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from 'components/Button';

import { testActions } from 'modules/Test/actions';
import style from './style';
import { IProps } from './types';

const LoginScreen = (props: IProps) => {
  props.testRequest();
  return (
    <View style={style.container}>
      <Button onPress={() => {}} text='Zaloguj się' />
    </View>
  );
};

LoginScreen.navigationOptions = {
  title: 'Logowanie',
};

const mapDispatchToProps = (dispatch: Dispatch<any>): IProps => ({
  testRequest: () => dispatch(testActions.test()),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
