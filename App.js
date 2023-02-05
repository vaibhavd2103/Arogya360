import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SplashScreen from './src/screens/SplashScreen';
import AuthNavigator from './src/navigation/AuthNavigator';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';
import {COLORS} from './src/constants/constants';

const App = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    let splashscreenTimeout = setTimeout(
      () => setShowSplashScreen(false),
      2500,
    );
    return () => {
      clearTimeout(splashscreenTimeout);
    };
  }, []);

  useEffect(() => {
    console.log(isAuthenticated);
  }, [isAuthenticated]);

  return showSplashScreen ? (
    <SplashScreen />
  ) : (
    // <Provider store={store}>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={COLORS?.background}
        barStyle={'dark-content'}
        // backgroundColor={COLORS?.blue}
      />
      <NavigationContainer>
        {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
    // </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
