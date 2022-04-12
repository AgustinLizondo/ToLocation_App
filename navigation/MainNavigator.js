import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen';
import AdditionScreen from '../screens/AdditionScreen';
import NotGranted from '../screens/NotGranted';
import ProfileScreen from '../screens/ProfileScreen';
import AuthScreen from '../screens/AuthScreen'

const Stack = createNativeStackNavigator();

const MainNavigator = () => {

    const isAuthenticated = useSelector(state => state.auth.userId); 

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                // initialRouteName='Addition'
            >
                {isAuthenticated
                    ?
                        <>
                            <Stack.Screen name='Home' component={HomeScreen} />
                            <Stack.Screen name='Addition' component={AdditionScreen} />
                            <Stack.Screen name='NotGranted' component={NotGranted} />
                            <Stack.Screen name='Profile' component={ProfileScreen} />
                        </>
                    :
                        <>
                            <Stack.Screen name='Auth' component={AuthScreen} />
                        </>
                    }
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default MainNavigator