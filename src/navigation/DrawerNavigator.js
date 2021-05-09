import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Test" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
