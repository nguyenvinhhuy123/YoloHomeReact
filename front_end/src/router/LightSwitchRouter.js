import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

export default function onLightChange(isEnable){
    console.log("Light Changed to:", isEnable);
    //Value to send to backend server
    const sendData = isEnable ? "1" : "0";
    const apiUrl = process.env.EXPO_PUBLIC_SERVER_API_URL;
    const postToggleChange = () => fetch(apiUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            color : sendData
        }),
    });
    postToggleChange().then(response => response.json())
}