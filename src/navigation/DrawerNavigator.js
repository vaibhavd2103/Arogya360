import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {ROUTES} from '../constants/contants';
import Appointment from '../screens/Appointment';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import CustomHeader from '../components/CustomHeader';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.tabNav} component={TabNavigator} />
      <Drawer.Screen
        name={ROUTES.appointment}
        component={Appointment}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Book Appointment" />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.profile}
        component={Profile}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Profile" />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.settings}
        component={Settings}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Settings" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
