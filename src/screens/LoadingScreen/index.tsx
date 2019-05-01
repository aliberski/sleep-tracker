import React from 'react';
import firebase from 'react-native-firebase';

import FullPageLoader from 'components/FullPageLoader';

import routes from 'constants/routes';
import { IProps } from './types';

const LoadingScreen = (props: IProps) => {
  firebase.auth().onAuthStateChanged(user => {
    props.navigation.navigate(user ? routes.MAIN : routes.LOGIN);
  });

  return <FullPageLoader />;
};

export default LoadingScreen;
