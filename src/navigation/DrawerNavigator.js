import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import FilterScreen from '../screens/Filters';

const Drawer = createDrawerNavigator();

const FilteredNavigation = createStackNavigator();

const FilterNavigator = (
  <FilteredNavigation>
    <FilteredNavigation.Screen name="Filters" component={FilterScreen} />
  </FilteredNavigation>
);

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MealsFavs" component={TabNavigator} />
      <Drawer.Screen name="Filtered Meals" component={FilterNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
