import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import LoginPage from './../pages/LoginPage';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}



