import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import FilterScreen from '../screens/Filters';
import { screenOptions } from './StackSettings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptions}>
      <Drawer.Screen
        name="MealsFavs"
        component={TabNavigator}
        options={{
          headerShown: false,
          drawerLabel: 'Meals',
        }}
      />
      <Drawer.Screen name="Filters" component={FilterScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
