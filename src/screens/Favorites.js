import React, { useLayoutEffect } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

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

  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

export default Favorites;
