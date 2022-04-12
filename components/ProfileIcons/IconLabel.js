import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../assets/Constants/Colors';

const IconLabel = ({ name, label, number }) => {
    return (
        <View style={styles.card}>
            <Icon name={name} size={28} color={Colors.Black} />
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.number}>{number}</Text>
        </View>
    )
}

export default IconLabel

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: Colors.Black,
        alignSelf: 'center',
    },
    number: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 12,
        color: Colors.Black,
        alignSelf: 'center',
    }
})