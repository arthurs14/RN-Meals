import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Favorites from '../screens/Favorites';
import MealDetail from '../screens/MealDetail';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Meal Detail" component={MealDetail} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
