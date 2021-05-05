import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Favorites from '../screens/Favorites';
import MealDetail from '../screens/MealDetail';
import { screenOptions } from './StackSettings';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator initialRouteName="Favorites" screenOptions={screenOptions}>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Meal Detail" component={MealDetail} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
