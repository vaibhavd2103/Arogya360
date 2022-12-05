import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {FONT, ROUTES} from '../constants/contants';
import Appointment from '../screens/Appointment';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import CustomHeader from '../components/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EditProfile from '../screens/EditProfile';
// import {useNavigation} from '@react-navigation/native';
import FindADoctor from '../screens/FindADoctor';
import PhoneDirectory from '../screens/PhoneDirectory';
import MedicineTracker from '../screens/MedicineTracker';
import SlideMenu from '../components/SlideMenu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  // const navigation = useNavigation();

  // console.log('DrawerNavigator', navigation);
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
      <Drawer.Screen
        name={ROUTES.medicinetracker}
        component={MedicineTracker}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Medicine Tracker" />
          ),
        }}
      />
      <Drawer.Screen name={ROUTES.phonedirectory} component={PhoneDirectory} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
