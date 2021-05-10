import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import FilterScreen from '../screens/Filters';
import { screenOptions } from './StackSettings';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Filters Meal" component={FilterScreen} />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        ...screenOptions,
        drawerActiveTintColor: Colors.accentColor,
        drawerActiveBackgroundColor: 'white',
        drawerLabelStyle: {
          fontFamily: 'OpenSans-Bold',
        },
      }}>
      <Drawer.Screen
        name="MealsFavs"
        component={TabNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Meals',
        }}
      />
      <Drawer.Screen
        name="Filters"
        component={StackNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Filters',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
