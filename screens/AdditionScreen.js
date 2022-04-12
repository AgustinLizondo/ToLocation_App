import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../assets/Constants/Colors'
import BasicButton from '../components/BasicButton'

const AdditionScreen = () => {

    const [adressName, setAdressName] = useState('')
    const [place, setPlace] = useState('')

    const handleAddPlace = () => {
        console.log('Place')
    }

    return (
        <View style={{ marginTop: 128, flex: 1 }}>
            <View style={{ marginLeft: 16, marginBottom: 16 }}>
                <View>
                    <Text style={styles.dataLabel}>Place Name</Text>
                    <TextInput style={styles.dataForm} keyboardType='email-address' onChangeText={(text) => setAdressName(text)} />
                </View>
                <View>
                    <Text style={styles.dataLabel}>Adress</Text>
                    <TextInput style={styles.dataForm} />
                </View>
            </View>
            <BasicButton text='Add Place' onTap={handleAddPlace} />
        </View>
    )
}

export default AdditionScreen

const styles = StyleSheet.create({
    dataForm: {
        borderBottomColor: Colors.SemiLightViolet,
        borderBottomWidth: 2,
        width: '75%',
        fontFamily: 'Poppins-Regular',
        fontSize: 20,
        color: Colors.Black
    },
    dataLabel: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: Colors.Black
    }
})