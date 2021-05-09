import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Filters = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Filtered Meals',
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text>Filters Screen</Text>
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

export default Filters;
