import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {ROUTES} from '../constants/contants';
import Appointment from '../screens/Appointment';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.tabNav} component={TabNavigator} />
      <Drawer.Screen name={ROUTES.appointment} component={Appointment} />
      <Drawer.Screen name={ROUTES.profile} component={Profile} />
      <Drawer.Screen name={ROUTES.settings} component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
