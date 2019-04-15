import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import LoginScreen from 'screens/Auth/LoginScreen';
import RegisterScreen from 'screens/Auth/RegisterScreen';
import RemindPasswordScreen from 'screens/Auth/RemindPasswordScreen';

import {
  tabBarOptions,
  standardHeaderOptions,
} from 'constants/globalStyle';
import texts from 'constants/translations';
import routes from 'constants/routes';

const AuthTabNavigator = createMaterialTopTabNavigator(
  {
    [routes.LOGIN]: LoginScreen,
    [routes.REGISTER]: RegisterScreen,
  },
  {
    tabBarOptions,
  },
);

export default createStackNavigator(
  {
    AuthTabs: AuthTabNavigator,
    [routes.REMIND_PASSWORD]: RemindPasswordScreen,
  },
  // @ts-ignore
  {
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      ...standardHeaderOptions,
      title: texts.appName.toUpperCase(),
    },
  },
);
