import React from 'react';
import Login from '../screens/Login';
import Chat from '../screens/Chat';
import {ROUTES} from '../constants/constants';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import TabNavigator from './TabNavigator';
import CustomHeader from '../components/CustomHeader';
import SavedArticles from '../screens/SavedArticles';
import Profile from './../screens/Profile';
import Appointment from '../screens/Appointment';
import FindADoctor from '../screens/FindADoctor';
import Settings from '../screens/Settings';
import MedicineTracker from '../screens/MedicineTracker';
import PhoneDirectory from '../screens/PhoneDirectory';
import BMIChecker from '../screens/BMIChecker';
import DoctorsProfile from '../screens/DoctorsProfile';
import CreateReport from '../screens/CreateReport';
import BookAppointment from '../screens/BookAppointment';
import AppInfo from '../screens/AppInfo';
import DrAppoitments from '../screens/DrAppoitments';
import CreateArticle from '../screens/CreateArticle';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.tabNav}
        component={TabNavigator}
        options={{
          headerShown: false,
          // header: stackHeaderProps => (
          //   <CustomHeader {...stackHeaderProps} title="Profile" />
          // ),
        }}
      />
      <Stack.Screen
        name={ROUTES.chat}
        component={Chat}
        options={{
          headerShown: false,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Chat" />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.finddoctor}
        component={FindADoctor}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Find a Doctor"
              // LeftIcon={() => {
              //   return (
              //     <TouchableOpacity
              //       style={{
              //         width: 40,
              //         height: 40,
              //         justifyContent: 'center',
              //         alignItems: 'center',
              //         borderRadius: 40,
              //         backgroundColor: COLORS?.blue,
              //         marginHorizontal: 10,
              //       }}
              //       activeOpacity={0.8}
              //       onPress={() =>
              //         stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              //       }>
              //       <MaterialCommunityIcons
              //         name="menu"
              //         size={24}
              //         color={COLORS?.white}
              //       />
              //     </TouchableOpacity>
              //   );
              // }}
              // onLeftIconPress={() =>
              //   stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              // }
            />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.appointment}
        component={Appointment}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="My Appointments"
              // LeftIcon={() => {
              //   return (
              //     <TouchableOpacity
              //       style={{
              //         width: 40,
              //         height: 40,
              //         justifyContent: 'center',
              //         alignItems: 'center',
              //         borderRadius: 40,
              //         backgroundColor: COLORS?.blue,
              //         marginHorizontal: 10,
              //       }}
              //       activeOpacity={0.8}
              //       onPress={() =>
              //         stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              //       }>
              //       <MaterialCommunityIcons
              //         name="menu"
              //         size={24}
              //         color={COLORS?.white}
              //       />
              //     </TouchableOpacity>
              //   );
              // }}
              // onLeftIconPress={() =>
              //   stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              // }
            />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.profile}
        component={Profile}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Profile"
              // LeftIcon={() => {
              //   return (
              //     <TouchableOpacity
              //       style={{
              //         width: 40,
              //         height: 40,
              //         justifyContent: 'center',
              //         alignItems: 'center',
              //         borderRadius: 40,
              //         backgroundColor: COLORS?.blue,
              //         marginHorizontal: 10,
              //       }}
              //       activeOpacity={0.8}
              //       onPress={() =>
              //         stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              //       }>
              //       <MaterialCommunityIcons
              //         name="menu"
              //         size={24}
              //         color={COLORS?.white}
              //       />
              //     </TouchableOpacity>
              //   );
              // }}
              // onLeftIconPress={() =>
              //   stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              // }
              // RightIcon={() => {
              //   return <AntDesign name="edit" size={24} color="black" />;
              // }}
              // onRightIconPress={() => {
              //   stackHeaderProps?.scene?.descriptor?.navigation?.navigate(
              //     ROUTES.editProfile,
              //   );
              //   // console.log(stackHeaderProps?.scene?.descriptor?.navigation);
              // }}
            />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.editProfile}
        component={EditProfile}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Edit Profile" />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.createArticle}
        component={CreateArticle}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Create Article" />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.settings}
        component={Settings}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Settings"
              // LeftIcon={() => {
              //   return (
              //     <TouchableOpacity
              //       style={{
              //         width: 40,
              //         height: 40,
              //         justifyContent: 'center',
              //         alignItems: 'center',
              //         borderRadius: 40,
              //         backgroundColor: COLORS?.blue,
              //         marginHorizontal: 10,
              //       }}
              //       activeOpacity={0.8}
              //       onPress={() =>
              //         stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              //       }>
              //       <MaterialCommunityIcons
              //         name="menu"
              //         size={24}
              //         color={COLORS?.white}
              //       />
              //     </TouchableOpacity>
              //   );
              // }}
              // onLeftIconPress={() =>
              //   stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              // }
            />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.medicinetracker}
        component={MedicineTracker}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Medicine Tracker"
              // LeftIcon={() => {
              //   return (
              //     <TouchableOpacity
              //       style={{
              //         width: 40,
              //         height: 40,
              //         justifyContent: 'center',
              //         alignItems: 'center',
              //         borderRadius: 40,
              //         backgroundColor: COLORS?.blue,
              //         marginHorizontal: 10,
              //       }}
              //       activeOpacity={0.8}
              //       onPress={() =>
              //         stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              //       }>
              //       <MaterialCommunityIcons
              //         name="menu"
              //         size={24}
              //         color={COLORS?.white}
              //       />
              //     </TouchableOpacity>
              //   );
              // }}
              // onLeftIconPress={() =>
              //   stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              // }
            />
          ),
        }}
      />
      <Stack.Screen
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
      <Stack.Screen
        name={ROUTES.bmichecker}
        component={BMIChecker}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="BMI Checker"
              // LeftIcon={() => {
              //   return (
              //     <TouchableOpacity
              //       style={{
              //         width: 40,
              //         height: 40,
              //         justifyContent: 'center',
              //         alignItems: 'center',
              //         borderRadius: 40,
              //         backgroundColor: COLORS?.blue,
              //         marginHorizontal: 10,
              //       }}
              //       activeOpacity={0.8}
              //       onPress={() =>
              //         stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              //       }>
              //       <MaterialCommunityIcons
              //         name="menu"
              //         size={24}
              //         color={COLORS?.white}
              //       />
              //     </TouchableOpacity>
              //   );
              // }}
              // onLeftIconPress={() =>
              //   stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              // }
            />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.doctorsProfile}
        component={DoctorsProfile}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Doctors Profile" />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.createReport}
        component={CreateReport}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader
              {...stackHeaderProps}
              title="Create Report"
              // LeftIcon={() => {
              //   return (
              //     <TouchableOpacity
              //       style={{
              //         width: 40,
              //         height: 40,
              //         justifyContent: 'center',
              //         alignItems: 'center',
              //         borderRadius: 40,
              //         backgroundColor: COLORS?.blue,
              //         marginHorizontal: 10,
              //       }}
              //       activeOpacity={0.8}
              //       onPress={() =>
              //         stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              //       }>
              //       <MaterialCommunityIcons
              //         name="menu"
              //         size={24}
              //         color={COLORS?.white}
              //       />
              //     </TouchableOpacity>
              //   );
              // }}
              // onLeftIconPress={() =>
              //   stackHeaderProps?.scene?.descriptor?.navigation?.openDrawer()
              // }
            />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.bookAppointment}
        component={BookAppointment}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="Book Appointment" />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.appInfo}
        component={AppInfo}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="App Information" />
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.drAppoitments}
        component={DrAppoitments}
        options={{
          headerShown: true,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="My Appoitments" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
