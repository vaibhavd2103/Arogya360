import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
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
import StackNavigator from './StackNavigator';
import BMIChecker from '../screens/BMIChecker';
import DoctorsProfile from '../screens/DoctorsProfile';
import CreateReport from '../screens/CreateReport';
import BookAppointment from '../screens/BookAppointment';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator
      drawerContent={props => <SlideMenu {...props} />}
      screenOptions={() => {
        return {
          drawerStyle: {
            width: (DIMENSIONS?.width * 3) / 4,
          },
        };
      }}
      statusBarAnimation="fade">
      <Drawer.Screen name={ROUTES.stackNav} component={StackNavigator} />
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
              onRightIconPress={() => {
                stackHeaderProps?.scene?.descriptor?.navigation?.navigate(
                  ROUTES.editProfile,
                );
                // console.log(stackHeaderProps?.scene?.descriptor?.navigation);
              }}
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
      <Drawer.Screen
        name={ROUTES.bmichecker}
        component={BMIChecker}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="BMI Checker" />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.doctorsProfile}
        component={DoctorsProfile}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Doctors Profile" />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.createReport}
        component={CreateReport}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Create Report" />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.bookAppointment}
        component={BookAppointment}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Book Appointment" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
