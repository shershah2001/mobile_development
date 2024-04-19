import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import Card from './Card';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Tab_Navigator = () => {
  return (
    <Tab.Navigator
     screenOptions={{
      headerShown:false,
      tabBarStyle:{
        position:'absolute',
        bottom:10,
        left:25,
        right:25,
        borderRadius:10,
        height:60,
      }
     }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel:false,
          tabBarIcon: () => <Feather name={'home'} size={25} color="#333" />,
        }}
      />
      <Tab.Screen
        name="Card"
        component={Card}
        options={{
          headerShown: false,
          tabBarShowLabel:false,
          tabBarIcon: () => <MaterialIcons name={'tips-and-updates'} size={25} color="#333" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tab_Navigator;
