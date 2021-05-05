import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ navigation, listData }) => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        meal={itemData}
        onSelectMeal={() => {
          navigation.navigate('Meal Detail', { mealId: itemData.item.id });
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
