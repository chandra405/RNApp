import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Container } from '../components/Container';
import { Login } from '../components/Login';
import { Logo } from '../components/Logo';

export default class Home extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    navigation: PropTypes.object,
  };
  handleLogin = () => {
    this.props.navigation.navigate('Profile');
  };
  render() {
    return (
      <Container>
        <Logo />
        <Text>Hello Cricket!</Text>
        <Login onPress={this.handleLogin} />
      </Container>
    );
  }
}
