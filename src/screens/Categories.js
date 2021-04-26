import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Categories = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen</Text>
      <Button
        title="Go to Meals!"
        onPress={() => navigation.navigate('Category Meals')}
      />
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

export default Categories;
