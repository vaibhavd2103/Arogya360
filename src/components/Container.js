import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS} from '../constants/constants';

const Container = props => {
  return (
    <SafeAreaView style={{...styles.container, ...props.style}}>
      {props.children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS?.width,
    height: DIMENSIONS?.height,
    backgroundColor: COLORS.background,
  },
});
