import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetail';
import { screenOptions } from './StackSettings';

const Stack = createStackNavigator();

const MealsStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={screenOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default MealsStackNavigator;
