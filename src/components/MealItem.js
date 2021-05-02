import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = ({ meal, onSelectMeal }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text>{meal.item.title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{meal.item.duration} min</Text>
            <Text>{meal.item.complexity.toUpperCase()}</Text>
            <Text>{meal.item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',
    marginTop: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '90%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});

export default MealItem;
