import React from 'react';
import { Dimensions } from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import MainScreen from 'screens/MainScreen';

import routes from 'constants/routes';
import texts from 'constants/translations';
import {
  COLOR,
  standardHeaderOptions,
} from 'constants/globalStyle';
import HamburgerMenu from 'components/HamburgerMenu';

const MainNavigator = createStackNavigator(
  {
    [routes.MAIN]: {
      screen: MainScreen,
    },
  },
  // @ts-ignore
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      ...standardHeaderOptions,
      title: texts.appName,
      headerRight: <HamburgerMenu />,
    },
  },
);

export default createDrawerNavigator(
  {
    app: MainNavigator,
  },
  {
    drawerBackgroundColor: COLOR.primary,
    drawerWidth: Dimensions.get('window').width,
    drawerPosition: 'right',
    // contentComponent: Drawer,
  },
);
