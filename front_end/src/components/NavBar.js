import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Tab from '../constants/TabNav';
import HomePage from './src/screen/HomePage.js'

export default function NavBar(){
    return <Tab.Navigator
                initialRouteName={HomePage}
                activeColor="#f0edf6"
                inactiveColor="#3e2465"
                barStyle={{ paddingBottom: 48 }}
            >
                {
                    
                }
            </Tab.Navigator>
}