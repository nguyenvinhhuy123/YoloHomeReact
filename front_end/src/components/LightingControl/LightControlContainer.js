import { StyleSheet, View, Text, Modal, Button} from 'react-native';
import * as React from 'react';
import {useState} from 'react'
import {Switch} from 'react-native-paper';
import { LampCeiling  } from 'lucide-react-native';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';

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
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    lightLEDChanger:{
        width: '90%',
        justifyContent: 'space-between',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },

})
export default function LightControlContainer(
    {onLightChange,
    onLEDColorChange}
){
    const [isEnabled, setIsEnabled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        onLightChange(!isEnabled);
    }
    const onColorChange = (color) => {
        const hex = color.hex;
        console.log(hex)
        onLEDColorChange(hex);
    }
    
    return (
        <View style={styles.container}>
            <Switch 
                style={styles.lightToggleButton}
                trackColor={{false: '#F8F8F8', true: '#FFB267'}}
                thumbColor={'#282424'}
                ios_backgroundColor="#F8F8F8"
                onValueChange={toggleSwitch}
                value={isEnabled}
            ></Switch>
            <View style={styles.container}>
                <Button color={'#FFB267'} title='Change LED Color' onPress={() => setShowModal(true)} />

                <Modal transparent={true} visible={showModal} animationType='slide'>
                    <View style={styles.modalView}>
                    <ColorPicker 
                    style={styles.lightLEDChanger} value='red' onComplete={onColorChange}
                    boundedThumb={true}
                    >
                        <Preview />
                        <Panel1 />
                        <HueSlider />
                        <OpacitySlider />
                        <Swatches />
                    </ColorPicker>
                    <Button color={'#FFB267'} title='Confirm' onPress={() => setShowModal(false)} />
                    </View>
                </Modal>
            </View>
            <LampCeiling color='#F8F8F8'/>
        </View>
    )
}