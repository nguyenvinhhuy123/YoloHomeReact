import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import * as React from 'react';
import LightingControl from '../components/LightingControl/LightingControl';
import PostColorChange from '../router/PostColorChange';
import PostLightChange from '../router/PostLightSwitch';
import BedroomBG from '../constants/BedroomBG';
import GetLightSwitch from '../router/GetLightSwitch';
import GetColorChange from '../router/GetColorChange';
import FanControl from '../components/FanControl/FanControl';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#211D1D',
      flexDirection:"column",
      alignItems: 'stretch',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 50,
      paddingLeft: 20,
      paddingRight: 20,
    },
    subcontainer: {
      flex: 0.8,
      marginTop: 150,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      borderColor: '#fff',
    },
    title: {
      marginTop: 20,
      fontSize: 28, 
      color: "#f8f8f8",
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 20,
    },
    image: {
      width: 390, 
      height: 473, 
      left: -20, 
      top: 0,
      position: 'absolute', 
      backgroundColor: 'linear-gradient(180deg, rgba(25, 10, 6, 0.50) 22%, rgba(25, 10, 6, 0) 50%), linear-gradient(0deg, #211D1D 0%, rgba(33, 29, 29, 0) 100%)'    
    }, 
  });


export default function HomePage() {
    const [isLoading, setLoading] = useState(true);
    const [lightColor, setColor] = useState("#ffffff");
    const [lightSwitch, setLight] = useState(false);

    const getInitialColor = async () => {
      newColor = await GetColorChange()
      setColor(newColor)
      setLoading(false)
    }
    const getInitialSwitch = async () => {
      newLight = await GetLightSwitch()
      setLight(newLight)
      setLoading(false)
    }
    useEffect(() => {
      setTimeout(() => setLoading(false), 3000)
    }, [])
    if (isLoading)
    {
      return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#FFB267" />
          </View>
        )
    }
    else {
      return (
        <View style={styles.container}>
          <Image
              style={styles.image}
              source={BedroomBG}
            >
            </Image >
          <Text style={styles.title}>Home Screen</Text>
          <ScrollView 
          style={styles.subcontainer}
          contentContainerStyle = {
            {
              flexDirection:"column",
              alignItems: 'center',
              justifyContent: 'space-between',
              gap:10,
            }
          }>
            <View style={{flex: 0.6,
                backgroundColor: "transparent",
                flexDirection:"row",
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 20,}
            }>
              <View style={{flex:0.4, height:150, gap:10, backgroundColor: "#fff"}}>
                <Text style={color="#fff"}>Humidity</Text>
              </View>
              <View style={{flex:0.4, height:150,backgroundColor: "#fff"}}>
                <Text style={color="#fff"}>Purifier</Text>
              </View>
            </View>
            <LightingControl 
                deviceName="LED Light" 
                onLightChange={PostLightChange}
                onLEDColorChange={PostColorChange}
              ></LightingControl>
            <FanControl
            deviceName="Fan"
            initialFanStrength={0}
            ></FanControl>
          </ScrollView>
          <StatusBar style="auto" />
        </View>
      );
    }
  }