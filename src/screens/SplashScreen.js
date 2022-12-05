import {StyleSheet, View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'native-base';
import {COLORS, ROUTES} from './../constants/contants';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    goToLogin();
  }, []);
  function goToLogin() {
    setTimeout(() => {
      // navigation?.navigate(ROUTES.welcome);
      navigation?.navigate(ROUTES.home);
    }, 3000);
  }
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require('../assets/logo.png')}
        style={{height: 200, width: 200}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
