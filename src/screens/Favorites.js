import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'My Favorites',
    });
  });

  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
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

export default Favorites;
