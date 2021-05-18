import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);

    return (
      <MealItem
        meal={itemData}
        onSelectMeal={() => {
          navigation.navigate('Meal Detail', {
            mealId: itemData.item.id,
            isFav: isFavorite,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%',
  },
});

export default MealList;
