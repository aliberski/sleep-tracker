import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Button from 'components/Button';

import { idAuth } from 'constants/testIDs';
import { testActions } from 'modules/Test/actions';
import style from './style';
import { IProps, IDispatchProps } from './types';

const LoginScreen = (props: IProps) => {
  props.testRequest();
  return (
    <View style={style.container} testID={idAuth.loginScreen}>
      <Button onPress={() => {}} text='Zaloguj się' />
    </View>
  );
};

LoginScreen.navigationOptions = {
  title: 'Logowanie',
};

/* istanbul ignore next */
const mapDispatchToProps = (dispatch: Dispatch<any>): IDispatchProps => ({
  testRequest: () => dispatch(testActions.test()),
});

export { LoginScreen };
export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
