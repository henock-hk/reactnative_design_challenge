import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeShopContainer from '../Home/HomeShopContainer';
import g_heart from '../../assets/icons/g_heart_35.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  return (
   
      <Tab.Navigator
       activeColor="red"
      barStyle={{ backgroundColor: '#fff',elevation: 0,
      elevation: 0,
            shadowOffset: { width: 0, height: 10 }, 
            shadowOpacity: 0.4,
            
      }}
      >
        <Tab.Screen name="Home" component={HomeShopContainer}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={20} color={color} />
          
          ),
        }}
         />
        <Tab.Screen name="favorit" component={SettingsScreen}
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={20} color={color}/>
          ),
        }}
         />
            <Tab.Screen name="cart" component={SettingsScreen}
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="shopping-cart" size={20} color={color} />
          ),
        }}
         />
            <Tab.Screen name="Settings" component={SettingsScreen}
         options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
         />
      </Tab.Navigator>
   
  );
}
