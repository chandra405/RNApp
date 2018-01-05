import React from 'react';
import Expo from 'expo';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import styles from './styles';

class Login extends React.Component {


  async signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '538232911293-02mvio8ctpq1jm7uu5s2qv0eo7do8lj1.apps.googleusercontent.com',
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {

        return result.accessToken;
      }
      return { cancelled: true };
    } catch (e) {
      return { error: true };
    }
  }

  async logInWithFBAsync() {
    try {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('156590314985583', {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(medium)`,
        );
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
        const userInfo = await response.json();
        await this.setState(userInfo);
        console.log(userInfo);
        // this.props.navigation.navigate('Profile');
      }
    } catch (e) {
      return { error: true };
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username or Phone Number"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          underlineColorAndroid="transparent"
        />
        <Text> OR </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.signInWithGoogleAsync}>
          <Text style={styles.buttonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.logInWithFBAsync}>
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
