import React from 'react';
import Login from '../screens/Login';
import Chat from '../screens/Chat';
import {ROUTES} from '../constants/constants';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import TabNavigator from './TabNavigator';
import CustomHeader from '../components/CustomHeader';
import SavedArticles from '../screens/SavedArticles';

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
      {/* <Stack.Screen
        name={ROUTES.savedArticles}
        component={SavedArticles}
        options={{
          headerShown: false,
          header: stackHeaderProps => (
            <CustomHeader {...stackHeaderProps} title="" />
          ),
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
