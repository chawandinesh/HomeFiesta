import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {
  AddDetails,
  Categories,
  Details,
  HomeScreen,
  ShowData,
  ViewAllDetails,
  ViewAllData,
  AboutUs
} from '../screens';

const Stack = createStackNavigator();
export default function navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddDetails" component={AddDetails} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="ShowData" component={ShowData} />
        <Stack.Screen name="ViewAllDetails" component={ViewAllDetails} />
        <Stack.Screen name="ViewAllData" component={ViewAllData} />
        <Stack.Screen name="AboutUs" component={AboutUs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
