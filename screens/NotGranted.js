import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../assets/Constants/Colors'
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import { changePermission } from '../store/actions/permission.action'
import { useDispatch } from 'react-redux'

const NotGranted = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    async function requestLocationPermission() {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status === 'granted') {
                navigation.navigate('Home');
                dispatch(changePermission(status));
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.card}>
            <Text style={styles.condition} >You must accept <Text style={{ fontFamily: 'Poppins-Black' }}>Location</Text> permissions to let this app work properly</Text>
            <TouchableOpacity style={styles.button} onPress={requestLocationPermission}>
                <Text style={{ fontSize: 18, color: Colors.Black, fontFamily: 'Poppins-SemiBold' }}>Grant Permissions</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NotGranted

const styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.White,
        padding: 24,
    },
    condition: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: Colors.Black
    },
    button: {
        width: 256,
        height: 48,
        backgroundColor: Colors.SemiLightViolet,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
})