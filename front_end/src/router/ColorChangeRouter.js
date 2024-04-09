import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { colorKit } from 'reanimated-color-picker';

export default function onColorChange(color){
    console.log("Color Changed to", color);
    
    //Send data is color value
    //Change to hex color value (negate any error in hex value)
    const sendData = colorKit.HEX(color).string(); 
}