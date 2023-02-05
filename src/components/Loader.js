import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';

const Loader = ({loading}) => {
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
        <ActivityIndicator size="large" color={COLORS?.green} />
      </View>
    );
  }
};

export default Loader;

const styles = StyleSheet.create({});
