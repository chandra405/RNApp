import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {},
  },
});
