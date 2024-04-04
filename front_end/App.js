import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/NavBar';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282424',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>{
      <NavBar></NavBar>
    }</NavigationContainer>

  );
}

