import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import MainScreen from 'screens/MainScreen';
import { SettingsScreen } from 'screens/SettingsScreen';
import Drawer from 'components/Drawer';
import HamburgerMenu from 'components/HamburgerMenu';

import routes from 'constants/routes';
import texts from 'constants/translations';
import {
  standardHeaderOptions,
  DRAWER_WIDTH,
} from 'constants/globalStyle';

const MainNavigator = createStackNavigator(
  {
    [routes.MAIN]: MainScreen,
    [routes.SETTINGS]: SettingsScreen,
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
  // @ts-ignore
  {
    drawerBackgroundColor: 'transparent',
    drawerWidth: DRAWER_WIDTH,
    drawerPosition: 'right',
    contentComponent: Drawer,
  },
);
