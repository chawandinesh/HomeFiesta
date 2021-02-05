/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import Categories from './src/screens/Categories'
import Details from './src/screens/Details'
import ShowData from './src/screens/ShowData'
import AddDetails from './src/screens/AddDetails'
import Navigator from './src/routes/navigator'
import Context from './src/screens/context'
const App = () => {
  return (
    <Context>
      <Navigator/>
    </Context>
  );
};


export default App;
