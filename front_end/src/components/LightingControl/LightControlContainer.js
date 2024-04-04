import { StyleSheet, View, Text} from 'react-native';
import * as React from 'react';
import {useState} from 'react'
import {Switch} from 'react-native-paper';
import { LampCeiling  } from 'lucide-react-native';

const styles = StyleSheet.create({
    container : {
        marginHorizontal: 10,
        width: "90%",
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    lightToggleButton: {
        flexDirection: 'column',
    },
    lightLEDChanger:{
        width: 150,
        height: 30,
        borderWidth: 1,
        borderColor: '#F8F8F8',
        color: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default function LightControlContainer(
    {onLightChange,
    onLEDColorChange}
){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onLightChange(!isEnabled);
    }
    return (
        <View style={styles.container}>
            <Switch 
                style={styles.lightToggleButton}
                trackColor={{false: '#F8F8F8', true: '#FFB267'}}
                thumbColor={'#282424'}
                ios_backgroundColor="#F8F8F855"
                onValueChange={toggleSwitch}
                value={isEnabled}
            ></Switch>
            <Text style={styles.lightLEDChanger}>LED Color</Text>
            <LampCeiling color='#F8F8F8'/>
        </View>
    )
}