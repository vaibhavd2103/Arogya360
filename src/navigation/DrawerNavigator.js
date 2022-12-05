import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {FONT, ROUTES} from '../constants/contants';
import Appointment from '../screens/Appointment';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import CustomHeader from '../components/CustomHeader';
import FindADoctor from '../screens/FindADoctor';
import PhoneDirectory from '../screens/PhoneDirectory';
import MedicineTracker from '../screens/MedicineTracker';
import SlideMenu from '../components/SlideMenu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <SlideMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}>
      <Drawer.Screen name={ROUTES.tabNav} component={TabNavigator} />
      <Drawer.Screen name={ROUTES.appointment} component={Appointment} />
      <Drawer.Screen name={ROUTES.profile} component={Profile} />
      <Drawer.Screen name={ROUTES.settings} component={Settings} />
      <Drawer.Screen name={ROUTES.finddoctor} component={FindADoctor} />
      <Drawer.Screen
        name={ROUTES.medicinetracker}
        component={MedicineTracker}
      />
      <Drawer.Screen name={ROUTES.phonedirectory} component={PhoneDirectory} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
