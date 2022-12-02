import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {DIMENSIONS, ROUTES} from '../constants/contants';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Article from '../screens/Article';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: '#fff',
        width: DIMENSIONS.width - 60,
        alignSelf: 'center',
        bottom: 20,
        elevation: 20,
        shadowOffset: {height: 10},
        borderRadius: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 10,
      }}>
      <Tab.Screen name={ROUTES.home} component={Home} />
      <Tab.Screen name={ROUTES.chat} component={Chat} />
      <Tab.Screen name={ROUTES.article} component={Article} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
