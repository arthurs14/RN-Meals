import React, { useLayoutEffect } from 'react';
import { View, FlatList, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/data';

const CategoryMeals = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId,
  );

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  // Changes header styling and title to match the category
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, selectedCategory]);

  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Meal Detail')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMeals;
