import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Colors from '../assets/Constants/Colors'
import React from 'react'

const BasicButton = ({ onTap, text }) => {
    return (
        <TouchableOpacity onPress={onTap} style={styles.button}>
            <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18 }} >{text}</Text>
        </TouchableOpacity>
    )
}

export default BasicButton

const styles = StyleSheet.create({
    button: {
        width: 256,
        height: 48,
        backgroundColor: Colors.SemiLightViolet,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 64,
        alignSelf: 'center',
        marginTop: 44,
    },
})