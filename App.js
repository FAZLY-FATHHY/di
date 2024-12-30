import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { AppProvider } from './context/AppContext';
import SignupPage from './pages/SignupPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name='Signup' component={SignupPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

