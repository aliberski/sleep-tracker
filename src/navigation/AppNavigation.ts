import { createStackNavigator, createAppContainer } from 'react-navigation';
import routes from 'constants/routes';
import MainScreen from 'screens/MainScreen';
import AuthNavigation from './AuthNavigation';

const AppNavigation = createStackNavigator(
  {
    Auth: AuthNavigation,
    [routes.MAIN]: MainScreen,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigation);
