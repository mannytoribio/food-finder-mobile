import { StatusBar } from 'expo-status-bar'
import React, { createContext, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base'
import Home from './components/Home'
import RandomRestauraunt from './components/RandomRestauraunt'


const Stack = createNativeStackNavigator()
export const RestaurantContext = createContext()


export default function App() {
  const [restaurants, setRestaurants] = useState()
  return (
   <NativeBaseProvider>
    <NavigationContainer>
      <RestaurantContext.Provider value={{ restaurants, setRestaurants }}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Random" component={RandomRestauraunt} />
        </Stack.Navigator>
      </RestaurantContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
   </NativeBaseProvider>
  );
}


