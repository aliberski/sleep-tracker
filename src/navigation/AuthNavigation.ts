import {
  createMaterialTopTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import routes from 'constants/routes';
import LoginScreen from 'screens/Auth/LoginScreen';
import RegisterScreen from 'screens/Auth/RegisterScreen';
import RemindPasswordScreen from 'screens/Auth/RemindPasswordScreen';

const AuthTabNavigator = createMaterialTopTabNavigator({
  [routes.LOGIN]: LoginScreen,
  [routes.REGISTER]: RegisterScreen,
});

export default createStackNavigator(
  {
    AuthTabs: AuthTabNavigator,
    [routes.REMIND_PASSWORD]: RemindPasswordScreen,
  },
  {
    headerMode: 'none',
  },
);
