import React, { useLayoutEffect } from 'react';

import MealList from '../components/MealList';
import { MEALS } from '../data/data';

const Favorites = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Favorites',
    });
  });

  // dummy test to show something showing in favorites
  const favoritedMeals = MEALS.filter(
    meal => meal.id === 'm1' || meal.id === 'm.2',
  );

  return <MealList listData={favoritedMeals} navigation={navigation} />;
};

export default Favorites;
