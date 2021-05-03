import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react/cjs/react.development';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/data';
import HeaderButton from '../components/HeaderButton';

const MealDetail = ({ navigation, route }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favorite"
            iconName={'ios-star'}
            onPress={() => console.log('Mark as favorite!')}
          />
        </HeaderButtons>
      ),
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
