import {View, Text, TouchableOpacity} from 'react-native';
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
import AppInfo from '../screens/AppInfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <Drawer.Screen
        name={ROUTES.finddoctor}
        component={FindADoctor}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Find a Doctor"
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.appointment}
        component={Appointment}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="My Appointments"
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
            />
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
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
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
            <CustomHeader
              {...stackHeaderProps}
              title="Settings"
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.medicinetracker}
        component={MedicineTracker}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Medicine Tracker"
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.phonedirectory}
        component={PhoneDirectory}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Phone Directory"
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
            />
          ),
        }}
      />
      <Drawer.Screen
        name={ROUTES.bmichecker}
        component={BMIChecker}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="BMI Checker"
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
            />
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
            <CustomHeader
              {...stackHeaderProps}
              title="Create Report"
              LeftIcon={() => {
                return (
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 40,
                      backgroundColor: COLORS?.blue,
                      marginHorizontal: 10,
                    }}
                    activeOpacity={0.8}
                    onPress={() =>
                      stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
                    }>
                    <MaterialCommunityIcons
                      name="menu"
                      size={24}
                      color={COLORS?.white}
                    />
                  </TouchableOpacity>
                );
              }}
              onLeftIconPress={() =>
                stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              }
            />
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
      <Drawer.Screen
        name={ROUTES.appInfo}
        component={AppInfo}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="App Information" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
