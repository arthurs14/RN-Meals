import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AllMealsStack from './MealsStackNavigator';
import Favorites from '../screens/Favorites';
import Colors from '../constants/Colors';

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      shifting={true}
      tabBarOptions={{
        activeTintColor:
          Platform.OS === 'android' ? 'white' : Colors.accentColor,
      }}
      barStyle={{ backgroundColor: Colors.primaryColor }}>
      <Tab.Screen
        name="Meals"
        component={AllMealsStack}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="ios-restaurant" size={25} color={tabInfo.color} />
          ),
          tabBarColor: Colors.primaryColor,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My Favorites"
        component={Favorites}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="ios-star" size={25} color={tabInfo.color} />
          ),
          tabBarColor: Colors.accentColor,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
