import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MealItem = ({ onSelectMeal }) => {
  return (
    <TouchableOpacity onPress={onSelectMeal}>
      <View>
        <Text>{}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

});

export default MealItem;
