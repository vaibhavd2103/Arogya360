import {StyleSheet, View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'native-base';
import {ROUTES} from './../constants/contants';

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
        source={{
          uri: 'https://www.pngkit.com/png/detail/113-1133314_logo-for-hospital-management-system-in-png.png',
        }}
        style={{height: 150, width: 200}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003162',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
