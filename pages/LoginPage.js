import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import transport from '../assets/ttt.avif'

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home', { username });
    } else {
      alert('Please fill in all fields!');
    }
  };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    alert('Forgot Password functionality not yet implemented.');
  };

  return (
    <View style={styles.container}>
      {/* Logo in the top-left corner */}
      <View style={styles.logoContainer}>
        <Image 
          source={transport} // Replace with your logo's path
          style={styles.logo}
        />
      </View>

      <View style={styles.header}>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Click to Drive-in" onPress={handleLogin} />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#00008B', // Dark blue background color
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  logo: {
    width: 40, // Adjust the logo width
    height: 40, // Adjust the logo height
    resizeMode: 'contain', // Maintain aspect ratio
  },
  header: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  signupText: {
    fontSize: 16,
    color: '#FFD700', // Gold color for better contrast on dark background
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white', // White text for better readability
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'white', // White background for input fields
    borderColor: '#ddd',
    color: 'black', // Black text inside input fields
  },
  forgotPasswordText: {
    marginTop: 10,
    fontSize: 14,
    color: '#FFD700', // Gold text color
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginPage;
