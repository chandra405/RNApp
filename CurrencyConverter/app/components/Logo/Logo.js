import React, { Component } from 'react';
import Expo from 'expo';
// import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Image style={styles.container} source={require('../../Images/logo.png')} />
  </View>
);

export default Logo;
