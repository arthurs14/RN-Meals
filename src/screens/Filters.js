import React, { useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = ({ label, state, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

const Filters = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Filtered Meals',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avalable Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-Free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
});

export default Filters;
