import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/Constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { goCycling, goWalking } from '../../store/actions/go.action'


const OptionItem = ({ name, selected }) => {

    const value = useSelector(state => state.isGoing.value)

    const dispatch = useDispatch();

    const handleGo = () => {
        if (value === 'GO_WALKING' && name === 'bicycle') {
            dispatch(goCycling())
        } else if (value === 'GO_CYCLING' && name === 'walk') {
            dispatch(goWalking())
        } else return
    }

    return (
        <TouchableOpacity
            style={[styles.card, selected ? styles.selectedBorder : null]}
            onPress={handleGo}
        >
            <Icon name={name} size={48} color={selected ? Colors.BoldViolet : Colors.Gray} />
            <Text style={[styles.text, { color: selected ? Colors.BoldViolet : Colors.Gray }]}>
                {name === 'walk'
                    ? 'Walking'
                    : 'Cycling'
                }
            </Text>
        </TouchableOpacity>
    )
}

export default OptionItem

const styles = StyleSheet.create({
    card: {
        width: '100%',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Poppins-Bold',
    },
    selectedBorder: {
        borderRightColor: Colors.BoldViolet,
        borderRightWidth: 4,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    }
})