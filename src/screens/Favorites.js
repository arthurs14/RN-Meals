import React, { useLayoutEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import { MEALS } from '../data/data';
import HeaderButton from '../components/HeaderButton';

const Favorites = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Favorites',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  });

  // dummy test to show something showing in favorites
  const favoritedMeals = MEALS.filter(
    meal => meal.id === 'm1' || meal.id === 'm2',
  );

  return <MealList listData={favoritedMeals} navigation={navigation} />;
};

export default Favorites;
