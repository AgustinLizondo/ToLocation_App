import { Image, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/Constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import OptionItem from './OptionItem';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LeftInfoScreen = () => {

    const navigation = useNavigation();
    const value = useSelector(state => state.isGoing.value)
    const handleGoProfile = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.touchableIcon} onPress={handleGoProfile}>
                <Icon name='person' size={48} color={Colors.Black} />
            </TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/Images/GLOCATION.png')} />
            <View style={{ height: height - 240, top: 64, justifyContent: 'space-around', alignItems: 'center' }}>
                <OptionItem name={'walk'} selected={value === 'GO_WALKING' ? true : false} />
                <OptionItem name={'bicycle'} selected={value === 'GO_CYCLING' ? true : false} />
            </View>
        </View>
    )
}

export default LeftInfoScreen

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.White,
        color: Colors.White,
        borderBottomLeftRadius: 24,
        height: (height + 320),
        top: -320,
        paddingTop: 120,
        width: '25%',
        alignSelf: 'flex-start',
    },
    image: {
        transform: [{ rotate: '-90deg' }],
        width: 124,
        height: 64,
        alignSelf: 'center',
    },
    touchableIcon: {
        top: -80,
        alignSelf: 'center',
        padding: 6,
    }
})