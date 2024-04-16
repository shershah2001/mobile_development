/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/components/app/store';
import Card from './src/components/Card';
// import Navigation from './src/components/Navigation';
// import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import WholeCard_Data from './src/components/WholeCard_Data';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import { Text, View ,Button} from 'react-native';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Card" component={Card} />
          <Stack.Screen name="WholeCard_Data" component={WholeCard_Data} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
