import React, { useLayoutEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/data';
import MealItem from '../components/MealItem';

const CategoryMeals = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId,
  );

  const displayMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0,
  );

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        onSelectMeal={() => {}}
        duration={itemData.item.duration}
      />
    );
  };

  // Changes header styling and title to match the category
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
    });
  }, [navigation, selectedCategory]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%',
  },
});

export default CategoryMeals;
