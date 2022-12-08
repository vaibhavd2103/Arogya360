import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS, DIMENSIONS, ROUTES} from '../constants/contants';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Article from '../screens/Article';
import CustomTabBar from '../components/CustomTabBar';
import CustomHeader from '../components/CustomHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={COLORS?.blue}
      shifting={true}
      keyboardHidesNavigationBar
      labeled={false}
      inactiveColor={'#fff'}
      barStyle={{
        backgroundColor: '#fff',
        width: DIMENSIONS.width - 30,
        alignSelf: 'center',
        bottom: 20,
        elevation: 20,
        shadowOffset: {height: 10},
        borderRadius: 24,
        // borderTopRightRadius: 0,
        // borderBottomLeftRadius: 0,
        padding: 10,
        // height: 80,
      }}>
      <Tab.Screen
        name={ROUTES.home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: color,
                borderRadius: 20,
                height: 50,
                width: 50,
                position: 'absolute',
                top: -13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="ios-home"
                color={focused ? '#fff' : '#555'}
                size={30}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={ROUTES.article}
        component={Article}
        options={{
          title: 'Article',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: color,
                borderRadius: 20,
                height: 50,
                width: 50,
                position: 'absolute',
                top: -13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="article"
                color={focused ? '#fff' : '#555'}
                size={32}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.chat}
        component={Chat}
        options={{
          title: 'Chat',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: color,
                borderRadius: 20,
                height: 50,
                width: 50,
                position: 'absolute',
                top: -13,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="chatbox"
                color={focused ? '#fff' : '#555'}
                size={32}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
