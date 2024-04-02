import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#282424',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default function HomePage() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <View style={styles.container}>
          <Text style={{ color: "#f8f8f8" }}>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
      </View>
      
    );
  }