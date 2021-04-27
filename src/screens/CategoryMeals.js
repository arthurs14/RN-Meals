import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMeals = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMeals Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Meal Detail')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
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

export default CategoryMeals;
