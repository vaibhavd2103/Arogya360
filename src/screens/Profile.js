import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Container from './../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/contants';
import Entypo from 'react-native-vector-icons/Entypo';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import About from './About';
import MyHistory from './MyHistory';

const Tab = createMaterialTopTabNavigator();
const Profile = ({navigation}) => {
  return (
    <View
      style={{
        // paddingHorizontal: 25,
        // alignItems: 'center',
        height: DIMENSIONS.height,
        backgroundColor: COLORS.background,
      }}>
      {/* <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center', flex: 1}}> */}
      <View
        style={{
          paddingHorizontal: 25,
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
          }}
          style={styles.profilePic}
        />
        <Text style={{...FONT.header, paddingVertical: 10}}>
          Tanisha Thakur
        </Text>
        <Text style={{...FONT.title, color: 'gray'}}>129 Years old</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
            marginTop: 10,
          }}>
          <View style={styles.boxes}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Entypo name="dot-single" size={30} color={COLORS.blue} />
              <Text style={{...FONT.subTitle, color: 'gray'}}>Weight</Text>
            </View>
            <Text style={{...FONT.header, fontSize: 18, paddingLeft: 30}}>
              55kg
            </Text>
          </View>
          <View style={styles.boxes}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Entypo name="dot-single" size={30} color={COLORS.blue} />
              <Text style={{...FONT.subTitle, color: 'gray'}}>Height</Text>
            </View>
            <Text style={{...FONT.header, fontSize: 18, paddingLeft: 30}}>
              170cm
            </Text>
          </View>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            // height: 100,
            // backgroundColor: 'red',
            fontWeight: 'bold',
            width: DIMENSIONS.width,
            alignSelf: 'center',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            textTransform: 'none',
          },
          tabBarActiveTintColor: '#003467',
          tabBarInactiveTintColor: '#9098ac',
          tabBarIndicatorContainerStyle: {
            width: '100%',
          },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.blue,
          },
        }}>
        <Tab.Screen name={'About'} component={About} />
        <Tab.Screen name={'Medical History'} component={MyHistory} />
      </Tab.Navigator>
    </View>
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
    marginTop: 40,
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
