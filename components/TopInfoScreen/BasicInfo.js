import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../assets/Constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'

const BasicInfo = () => {

    const value = useSelector(state => state.isGoing.value)
    // Must update arrivalLongitude and arrivalTime with Google API
    const arrivalLongitude = '4.2';
    const arrivalTime = '01:25:46';

    return (
        <View>
            <View style={styles.subTopCard}>
                <TouchableOpacity style={styles.iconCard}>
                    {value === 'GO_WALKING'
                        ? <Icon name='walk' size={48} color={Colors.White} />
                        : <Icon name='bicycle' size={48} color={Colors.White} />
                    }
                </TouchableOpacity>
                <View style={styles.arrivalInfoCard}>
                    <View>
                        <Text style={styles.basicText}>
                            <Text style={[styles.boldBasicText, { fontSize: 24 }]}>{arrivalLongitude} </Text>
                            Km's.
                        </Text>
                        <Text style={styles.semiBoldBasicText}>Passed</Text>
                    </View>
                    <View>
                        <Text style={styles.basicText}>
                            <Text style={[styles.boldBasicText, { fontSize: 24 }]}>{arrivalTime} </Text>
                        </Text>
                        <Text style={styles.semiBoldBasicText}>Time</Text>
                    </View>
                </View>
            </View>
            <View style={styles.textCard}>
                <Text style={styles.boldBasicText}>{value === 'GO_WALKING' ? 'Walking' : 'Cycling'}</Text>
                <Text style={styles.basicText}>All are going good continue daily walking more than
                    <Text style={styles.semiBoldBasicText}>{value === 'GO_WALKING' ? ' 100' : ' 60'} min </Text>
                    to mantain your health.
                </Text>
            </View>
        </View>
    )
}

export default BasicInfo

const styles = StyleSheet.create({
    textCard: {
        paddingVertical: 12,
    },
    arrivalInfoCard: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    basicText: {
        color: Colors.White,
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    boldBasicText: {
        color: Colors.White,
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 18,
    },
    semiBoldBasicText: {
        color: Colors.White,
        fontFamily: 'Poppins-Bold'
    },
    subTopCard: {
        marginTop: 64,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCard: {
        padding: 6,
        marginRight: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: Colors.LightViolet,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
})