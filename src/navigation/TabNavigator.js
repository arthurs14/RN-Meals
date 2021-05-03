import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Meals" />
      <Tab.Screen name="My Favorites" />
    </Tab.Navigator>
  );
};

export default TabNavigator;
