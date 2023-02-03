import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {COLORS, DIMENSIONS, ROUTES} from '../constants/constants';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Article from '../screens/Article';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View} from 'react-native';
import Message from '../screens/Message';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      activeColor={`${COLORS?.blue}`}
      shifting={true}
      keyboardHidesNavigationBar
      labeled={false}
      inactiveColor={'#fff'}
      barStyle={{
        backgroundColor: '#fff',
        width: DIMENSIONS.width - 0,
        alignSelf: 'center',
        // bottom: 20,
        elevation: 20,
        shadowOffset: {height: 10},
        // borderRadius: 24,
        padding: 10,
        shadowColor: `${COLORS?.blue}`,
        height: 80,
      }}>
      <Tab.Screen
        name={ROUTES.home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: `${color}`,
                borderRadius: 20,
                height: 50,
                width: 50,
                position: 'absolute',
                top: -13,
                justifyContent: 'center',
                alignItems: 'center',
                // elevation: 20,
                // shadowColor: `${COLORS?.blue}`,
              }}>
              <Ionicons
                name={focused ? 'md-home' : 'md-home-outline'}
                color={focused ? '#fff' : `#555`}
                size={focused ? 30 : 26}
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
                // elevation: 20,
                // shadowColor: `${COLORS?.blue}`,
              }}>
              <Ionicons
                name={focused ? 'newspaper' : 'newspaper-outline'}
                color={focused ? '#fff' : `#555`}
                size={focused ? 30 : 26}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.message}
        component={Message}
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
                // elevation: 20,
                // shadowColor: `${COLORS?.blue}`,
              }}>
              <Ionicons
                name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                color={focused ? '#fff' : `#555`}
                size={focused ? 30 : 26}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
