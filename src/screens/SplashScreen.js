import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from 'native-base';
import {COLORS, DIMENSIONS, ROUTES} from './../constants/constants';

const SplashScreen = ({navigation}) => {
  const animation = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1990,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    // goToLogin();
    animation();
  }, []);

  function goToLogin() {
    setTimeout(() => {
      // navigation?.navigate(ROUTES.welcome);
      navigation?.navigate(ROUTES.home);
    }, 3000);
  }

  let scaleValue = new Animated.Value(0); // declare an animated value

  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.1, 0.55, 1],
    outputRange: [1, 1, 1.1, 1.2],
  });

  // let transformStyle = {...styles.card, transform: [{scale: cardScale}]};

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Animated.Image
        source={require('../assets/logo.png')}
        style={{
          height: DIMENSIONS?.width - 200,
          width: DIMENSIONS?.width - 200,
          borderRadius: 20,
          transform: [{scale: cardScale}],
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
