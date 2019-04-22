import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'react-native-firebase';

import routes from 'constants/routes';
import { COLOR } from 'constants/globalStyle';
import style from './style';
import { IProps } from './types';

const LoadingScreen = (props: IProps) => {
  firebase.auth().onAuthStateChanged(user => {
    props.navigation.navigate(
      user ? routes.MAIN : routes.LOGIN,
    );
  });

  return (
    <View style={style.container}>
      <ActivityIndicator
        size='large'
        color={COLOR.primary}
      />
    </View>
  );
};

export default LoadingScreen;
