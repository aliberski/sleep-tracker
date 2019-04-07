import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppNavigator = createStackNavigator(
  {
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
