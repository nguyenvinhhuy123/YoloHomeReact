import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import Slider from '@react-native-community/slider';
import * as React from 'react';
import LightingControl from '../components/LightingControl/LightingControl';
import onColorChange from '../router/ColorChangeRouter';
import onLightChange from '../router/LightSwitchRouter';
import { FontAwesome5 } from '@expo/vector-icons';

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
      marginTop: 50,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      borderColor: '#fff',
    },
    title: {
      fontSize: 28, 
      color: "#f8f8f8",
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 20,
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

export default function ControlPanel() {
  const [isLightOn, setIsLightOn] = React.useState(false); // Added state to manage switch

  const handleToggleLight = (newValue) => {
      setIsLightOn(newValue);
    }
  const [lightOpacity, setLightOpacity] = React.useState(0.5); // Light opacity state

  const handleToggleLight1 = (newValue) => {
      setLightOpacity(newValue);
    }
    const handleSliderChange = (value) => {
      // Update light opacity based on slider value (inverted for dimming effect)
      setLightOpacity(value / 100);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Control Panel</Text>
        <View style={styles.subcontainer}>
          <View style={{flex: 0.6,
              backgroundColor: "transparent",
              flexDirection:"row",
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 20,}
          }>
            
          </View>
          <LightingControl 
              deviceName="LED Light" 
              onLightChange={onLightChange}
              onLEDColorChange={onColorChange}
            ></LightingControl>
            {/* Added Slider */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, color: '#fff', marginRight: 10 }}>Main Light</Text>
          {/* Slider with Opacity Effect */}
          <Slider
            style={{ width: '80%' }}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#fff"
            onValueChange={handleSliderChange}
          />
          {/* Light Icon */}
          <FontAwesome5 name="lightbulb" size={24} color="#fff" style={{ opacity: lightOpacity }} />
        </View>
            {/* Added Switch */}
            <FontAwesome5
            name="lightbulb"
            size={24}
            color="#fff"
            style={{ opacity: isLightOn ? 1 : 0.5 }} // Adjust opacity values
          />
          {/* Switch */}
          <Switch
            value={isLightOn}
            onValueChange={handleToggleLight}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={'#fff'}
          />
        </View>
        <StatusBar style="auto" />
      </View>
      
    );
  }