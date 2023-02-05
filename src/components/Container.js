import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/constants';

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
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.background,
  },
});
