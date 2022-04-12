import { StyleSheet, View } from 'react-native'
import React from 'react'
import Colors from '../../assets/Constants/Colors'

const TopRightCard = ({ children }) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default TopRightCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.BoldViolet,
    color: Colors.White,
    borderBottomLeftRadius: 24,
    height: 320,
    width: '75%',
    marginTop: -64,
    alignSelf: 'flex-end',
    shadowColor: Colors.BoldViolet,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: .25,
    shadowRadius: 10,
    elevation: 2,
    padding: 24,
  }
})