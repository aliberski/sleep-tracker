import React from 'react';
import {
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import MainScreen from 'screens/MainScreen';
import SettingsScreen from 'screens/SettingsScreen';
import AboutScreen from 'screens/AboutScreen';
import SurveyScreen from 'screens/SurveyScreen';
import StatisticsScreen from 'screens/StatisticsScreen';
import ProfileScreen from 'screens/ProfileScreen';

import Drawer from 'containers/Drawer';
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
    [routes.PROFILE]: ProfileScreen,
    [routes.SETTINGS]: SettingsScreen,
    [routes.ABOUT]: AboutScreen,
    [routes.SURVEY]: SurveyScreen,
    [routes.STATISTICS]: StatisticsScreen,
  },
  // @ts-ignore
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      ...standardHeaderOptions,
      title: texts.appName.toUpperCase(),
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
