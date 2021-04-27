import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MealDetail = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>MealDetail Screen</Text>
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
