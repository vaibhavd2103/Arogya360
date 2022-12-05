import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {ROUTES} from '../constants/contants';
import Appointment from '../screens/Appointment';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import CustomHeader from '../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EditProfile from '../screens/EditProfile';
// import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  // const navigation = useNavigation();

  // console.log('DrawerNavigator', navigation);
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
            <CustomHeader
              {...stackHeaderProps}
              title="Profile"
              RightIcon={() => {
                return <AntDesign name="edit" size={24} color="black" />;
              }}
              // onRightIconPress={() => navigation.navigate(ROUTES.editProfile)}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.editProfile}
        component={EditProfile}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Edit Profile" />
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
