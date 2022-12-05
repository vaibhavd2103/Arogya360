import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SplashScreen from './src/screens/SplashScreen';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
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

  return showSplashScreen ? (
    <SplashScreen />
  ) : (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <NavigationContainer>
        <DrawerNavigator />
        {/* <AuthNavigator /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
