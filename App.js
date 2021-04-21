import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World, new app today!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'OpenSans-Regular',
  },
});

export default App;
