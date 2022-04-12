import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Colors from '../assets/Constants/Colors';
import { useDispatch } from 'react-redux';
import { signUp, signIn } from '../store/actions/auth.action';
import * as Location from 'expo-location';
import { fromThere } from '../store/actions/location.action'
import { setUserData } from '../store/actions/userdata.action'
import { verifyPermission } from '../components/PreviewMap/PreviewMap'

const AuthScreen = () => {

    const dispatch = useDispatch();

    const getLocation = async () => {
        const isGranted = await verifyPermission();

        if (!isGranted) return;

        const currentLocation = await Location.getCurrentPositionAsync();
        dispatch(fromThere({
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
        }))
    }
    getLocation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogIn = () => {
        dispatch(setUserData({ name: email }))
        dispatch(signIn(email, password))
    }

    const handleSignUp = () => {
        dispatch(signUp(email, password))
    }

    return (
        <View style={{ justifyContent: 'center', flex: 1 }}>
            <View style={{ marginLeft: 16, marginBottom: 16 }}>
                <View>
                    <Text style={styles.dataLabel}>Email</Text>
                    <TextInput style={styles.dataForm} keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
                </View>
                <View style={{ marginTop: 12 }}>
                    <Text style={styles.dataLabel}>Password</Text>
                    <TextInput style={styles.dataForm} onChangeText={(text) => setPassword(text)} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity style={styles.button} onPress={handleLogIn}>
                    <Text style={styles.textButton}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.textButton}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    button: {
        width: '45%',
        height: 48,
        backgroundColor: Colors.SemiLightViolet,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18
    },
    dataForm: {
        borderBottomColor: Colors.SemiLightViolet,
        borderBottomWidth: 2,
        width: '75%',
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: Colors.Black
    },
    dataLabel: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: Colors.Black
    }
})