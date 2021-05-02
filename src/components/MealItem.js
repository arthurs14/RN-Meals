import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = ({ title, duration, onSelectMeal }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <Text>{title}</Text>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{duration} minutes</Text>
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
    height: '80%',
  },
  mealDetail: {},
});

export default MealItem;
