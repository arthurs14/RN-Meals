import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const CategoryGrid = ({ onSelect, title, color }) => {
  // let TouchComponent = TouchableOpacity;

  // if (Platform.OS === 'android' && Platform.Version >= 21) {

  // }

  return (
    <TouchableOpacity style={styles.gridItem} onPress={onSelect}>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    // Shadow props only affect iOS
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // Affects Android
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    textAlign: 'right',
  },
});

export default CategoryGrid;
