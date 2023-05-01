import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import AnimatedLottieView from 'lottie-react-native';

const Loader = ({loading, uri}) => {
  if (loading) {
    return (
      <View
        style={{
          height: DIMENSIONS?.height,
          width: DIMENSIONS?.width,
          backgroundColor: COLORS?.white,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <ActivityIndicator size="large" color={COLORS?.green} /> */}
        <AnimatedLottieView
          style={{
            height: DIMENSIONS?.width - 100,
            width: DIMENSIONS?.width - 100,
          }}
          source={uri ? uri : require('../assets/loading.json')}
          autoPlay={true}
        />
      </View>
    );
  }
};

export default Loader;

const styles = StyleSheet.create({});
