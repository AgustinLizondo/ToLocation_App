import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../../assets/Constants/Colors'
import { useDispatch } from 'react-redux'
import { goThere } from '../../store/actions/destination.action'
import { useNavigation } from '@react-navigation/native'

const LocationButton = ({ item }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    function handleSetDestination() {
        dispatch(goThere(item.location))
        navigation.goBack();
    }

    return (
        <Pressable
            style={styles.button}
            onPress={handleSetDestination}
            android_ripple={{ color: Colors.LightViolet }}
        >
            <Icon name={item.logo} size={32} />
            <Text>{item.name}</Text>
        </Pressable>
    )
}

export default LocationButton

const styles = StyleSheet.create({
    button: {
        width: 76,
        height: 76,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: Colors.White,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 4,
    }
})