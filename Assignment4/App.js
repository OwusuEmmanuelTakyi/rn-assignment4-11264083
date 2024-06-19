import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View className="flex-1  bg-white">
      <StatusBar style="auto" />
      <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'login', headerShown:false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown:false }}  />
      </Stack.Navigator>
    </NavigationContainer>
       
    </View>
  );
}