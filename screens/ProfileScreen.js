import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Alert, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Colors from '../assets/Constants/Colors'
import { useNavigation } from '@react-navigation/native';
import IconLabel from '../components/ProfileIcons/IconLabel';
import { useSelector } from 'react-redux';
import { dropTable } from '../db';
import LocationButton from '../components/ProfileIcons/LocationButton';
import { data } from '../assets/Constants/Headquarters'

const windowHeigth = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const ProfileScreen = () => {

  const uuserData = useSelector(state => state.userData)
  const navigation = useNavigation();

  const userData = {
    userImage: 'https://images.pexels.com/photos/848117/pexels-photo-848117.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    userKm: '2.210',
    userPlaces: '120',
  }

  const handleGoBack = () => {
    navigation.navigate('Home');
  }
  const handleEditProfile = () => {
    Alert.alert(
      `We're working on this section.`,
      `Please be patient while we finish.`,
      [`OK`]
    )
  }

  return (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 32 }}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon name='x' size={28} color={Colors.Black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditProfile}>
          <Icon name='edit' size={28} color={Colors.Black} />
        </TouchableOpacity>
      </View>
      <View style={styles.shadow}>
        <Image
          source={{ uri: userData.userImage }}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.userName}>{uuserData.name}</Text>
      <Text style={styles.userLocation}>{uuserData.city}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 16 }}>
        <IconLabel name={'analytics'} label={'Kilometers'} number={userData.userKm} />
        <IconLabel name={'navigate'} label={'Places'} number={userData.userPlaces} />
      </View>
      <View style={{ marginTop: 32, justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }}>
        <Text>Headquarters</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <LocationButton item={item} />}
          numColumns={4}
          keyExtractor={(item) => item.index}
        />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  card: {
    paddingVertical: 48,
    paddingHorizontal: 16,
    height: (windowHeigth / 1.5),
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 98,
  },
  userName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: Colors.Black,
    alignSelf: 'center',
    marginTop: 12,
  },
  userLocation: {
    fontFamily: 'Poppins-SemiBold',
    marginTop: -8,
    fontSize: 12,
    color: Colors.Black,
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 24,
    width: 196,
    height: 196,
    alignSelf: 'center',
    borderRadius: 98,
    padding: 4,
    backgroundColor: Colors.LightViolet,
  }
})