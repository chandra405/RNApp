import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
  <KeyboardAvoidingView behavior="position" style={styles.container}>
    {children}
  </KeyboardAvoidingView>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
