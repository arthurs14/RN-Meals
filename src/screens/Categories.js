import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/data';

const renderGridItem = itemData => {}

const Categories = ({ navigation }) => {
  return (
    <FlatList data={CATEGORIES} renderItem={} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Categories;
