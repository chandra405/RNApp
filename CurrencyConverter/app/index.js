import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';
// import { StyleSheet, Text, View } from 'react-native';
import Home from '../app/screens/Home';
import Profile from '../app/screens/Profile';
import StackNavigator from '../app/config/routes';

EStylesheet.build({
  $primaryBlue: '#46FD7A',
});
export default () => <StackNavigator />;
