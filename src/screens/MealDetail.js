import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react/cjs/react.development';

import { MEALS } from '../data/data';

const MealDetail = ({ navigation, route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [navigation, selectedMeal]);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button title="Go to Categories" onPress={() => navigation.popToTop()} />
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

export default MealDetail;
