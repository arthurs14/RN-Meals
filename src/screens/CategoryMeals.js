import React, { useLayoutEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/data';
import MealList from '../components/MealList';

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

  return <MealList listData={displayMeals} navigation={navigation} />;
};

export default CategoryMeals;
