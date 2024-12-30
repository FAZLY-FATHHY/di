import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import transport from '../assets/ttt.avif'


const SignupPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    Alert.alert('Success', 'Account created successfully!');
    navigation.navigate('Login'); // Navigate back to the Login page
  };

  return (
    <View style={styles.container}>
      {/* Logo in the top-left corner */}
      <View style={styles.logoContainer}>
        <Image
          source={transport} // Replace with the actual path to your logo
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Text style={styles.loginLink}>
        Already have an account?{' '}
        <Text
          style={styles.loginLinkText}
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#00008B', // Dark blue background
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  logo: {
    width: 40, // Adjust the logo size
    height: 40,
    resizeMode: 'contain',
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
  loginLink: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
    color: 'white', // White text for better visibility
  },
  loginLinkText: {
    color: '#FFD700', // Gold text for link
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignupPage;
