import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import AllMealsStack from './MealsStackNavigator';
import FavoritesStack from './FavoritesStack';
import Colors from '../constants/Colors';

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      shifting={true}
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'OpenSans-Regular',
        },
        tabBarActiveTintColor:
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
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'OpenSans-Bold' }}>Meals</Text>
            ) : (
              'Meals'
            ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="My Favorites"
        component={FavoritesStack}
        options={{
          tabBarIcon: tabInfo => (
            <Icon name="ios-star" size={25} color={tabInfo.color} />
          ),
          tabBarColor: Colors.accentColor,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'OpenSans-Bold' }}>Favorites</Text>
            ) : (
              'Favorites'
            ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
