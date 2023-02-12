import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Container from './../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import Entypo from 'react-native-vector-icons/Entypo';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import About from './About';
import MyHistory from './MyHistory';
import {useSelector} from 'react-redux';
import SavedArticles from './SavedArticles';
import DoctorsAbout from './DoctorsAbout';
import DoctorsArticles from './DoctorsArticles';

const Tab = createMaterialTopTabNavigator();

const Profile = ({navigation}) => {
  const userType = useSelector(state => state?.userType);
  // const [userType, setUserType] = useState(2);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: '#9098ac',
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#f00',
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.blue,
        },
      }}
      keyboardDismissMode="on-drag">
      {userType == 1 ? (
        <>
          <Tab.Screen name={'About'} component={DoctorsAbout} />
          <Tab.Screen name={'My Articles'} component={DoctorsArticles} />
        </>
      ) : (
        <>
          <Tab.Screen name={'About'} component={About} options={{}} />
          <Tab.Screen name={'My              History'} component={MyHistory} />
          <Tab.Screen name={'Saved Articles'} component={SavedArticles} />
        </>
      )}
    </Tab.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 20,
  },
  boxes: {
    width: '40%',
    backgroundColor: COLORS.white,
    height: 70,
    borderRadius: 10,
    elevation: 2,
    padding: 5,
  },
});
