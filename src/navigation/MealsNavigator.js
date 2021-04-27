import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetail';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Meal Categories',
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primaryColor : 'white',
          },
          headerTintColor:
            Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        }}
      />
      <Stack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <Stack.Screen name="Meal Detail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
