import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
// import styles from './styles';
import { Container } from '../components/Container';

const Profile = ({ userInfo }) => (
  <Container>
    <Text>{userInfo.name}</Text>
  </Container>
);

Profile.propTypes = {
  userInfo: PropTypes.object,
};

export default Profile;
