import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import LoginScreen from 'screens/Auth/LoginScreen';
import RegisterScreen from 'screens/Auth/RegisterScreen';
import RemindPasswordScreen from 'screens/Auth/RemindPasswordScreen';

import { tabBarOptions } from 'constants/globalStyle';
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
  {
    headerMode: 'none',
  },
);
