import React from 'react';
import Login from '../screens/Login';
import {ROUTES} from '../constants/contants';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.login}
        component={Login}
        options={{
          headerShown: false,
          // header: stackHeaderProps => (
          //   <CustomHeader {...stackHeaderProps} title="Profile" />
          // ),
        }}
      />
      <Stack.Screen
        name={ROUTES.signup}
        component={Signup}
        options={{
          headerShown: false,
          // header: stackHeaderProps => (
          //   <CustomHeader {...stackHeaderProps} title="Profile" />
          // ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
