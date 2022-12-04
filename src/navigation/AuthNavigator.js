import React from 'react';
import Login from '../screens/Login';
import {ROUTES} from '../constants/contants';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.login} component={Login} />
      <Stack.Screen name={ROUTES.signup} component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
