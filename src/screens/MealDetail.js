import React, { useLayoutEffect } from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/data';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

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
            iconName="ios-star"
            onPress={() => console.log('Mark as favorite!')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration} min</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      <Text>List of ingredients...</Text>
      <Text style={styles.title}>Steps</Text>
      <Text>List of steps...</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
});

export default MealDetail;
