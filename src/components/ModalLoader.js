import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import AnimatedLottieView from 'lottie-react-native';

const ModalLoader = ({loading}) => {
  if (loading) {
    return (
      <View
        style={{
          height: DIMENSIONS?.height,
          width: DIMENSIONS?.width,
          backgroundColor: '#0003',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <ActivityIndicator size="large" color={COLORS?.blue} />
        {/* <AnimatedLottieView
          style={{
            height: DIMENSIONS?.width - 100,
            width: DIMENSIONS?.width - 100,
          }}
          source={require('../assets/loading.json')}
          autoPlay={true}
        /> */}
      </View>
    );
  }
};

export default ModalLoader;

const styles = StyleSheet.create({});
