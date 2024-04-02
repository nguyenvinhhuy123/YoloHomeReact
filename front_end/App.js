import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screen/HomePage.js'
import Stack from './src/constants/StackNav.js';
import Tab from './src/constants/TabNav.js';

export default function App() {
  return (
    <NavigationContainer>{
      <Tab></Tab>
    }</NavigationContainer>
  );
}

