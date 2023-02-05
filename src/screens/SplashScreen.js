import {StyleSheet, View, StatusBar, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'native-base';
import {COLORS, DIMENSIONS, ROUTES} from './../constants/constants';

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
        style={{
          height: DIMENSIONS?.width - 150,
          width: DIMENSIONS?.width - 150,
          borderRadius: 20,
        }}
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
