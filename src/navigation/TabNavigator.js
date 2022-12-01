import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ROUTES} from '../constants/contants';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Article from '../screens/Article';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.home} component={Home} />
      <Tab.Screen name={ROUTES.chat} component={Chat} />
      <Tab.Screen name={ROUTES.article} component={Article} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
