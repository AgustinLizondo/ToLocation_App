import React from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Fonts from './assets/Constants/Fonts';
import { Provider } from 'react-redux'
import store from './store'
import MainNavigator from './navigation/MainNavigator';
import { dropTable, init } from './db';

// dropTable();
init()
  .then(() => console.log('Database is running'))
  .catch((err) => console.log(err))

export default function App() {
  const [loaded] = useFonts(Fonts);
  if (!loaded) return <AppLoading />

  return (
    <Provider store={store} >
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
