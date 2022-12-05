import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/contants';

const Container = props => {
  return (
    <View style={{...styles.container, ...props.style}}>{props.children}</View>
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
