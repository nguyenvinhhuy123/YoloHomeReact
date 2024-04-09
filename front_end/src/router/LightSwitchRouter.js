import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function onLightChange(isEnable){
    console.log("Light Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? 1 : 0;
    
}