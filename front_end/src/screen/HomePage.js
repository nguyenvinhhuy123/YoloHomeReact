import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import LightingControl from '../components/LightingControl/LightingControl';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#211D1D',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 20,
      paddingRight: 20,
    },
    title: {
      fontSize: 28, 
      color: "#f8f8f8",
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    }
  });

export default function HomePage() {
    onLightChange = (isEnable) => {
      console.log("Light Changed to:", isEnable);
    }
    onLEDColorChange = function (color) {
      console.log("Color Changed to", color);
    };
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        <View style={styles.container}>
          <Text style={{ color: "#f8f8f8" }}>Open up App.js to start working on your app!</Text>
          <LightingControl 
            deviceName="LED Light" 
            onLightChange={onLightChange}
            onLEDColorChange={onLEDColorChange}
          ></LightingControl>
        </View>
        <StatusBar style="auto" />
      </View>
      
    );
  }