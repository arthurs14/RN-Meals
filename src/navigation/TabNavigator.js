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
      screenOptions={({ route }) => ({
        tabBarIcon: tabInfo => {
          if (route.name === 'Meals') {
            return (
              <Icon name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          } else if (route.name === 'My Favorites') {
            return <Icon name="ios-star" size={25} color={tabInfo.color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
        //inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Meals" component={AllMealsStack} />
      <Tab.Screen name="My Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
