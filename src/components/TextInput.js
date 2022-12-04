import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS} from '../constants/contants';

const Input = ({placeholder, onChangeText, value, height, width, err}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={{
          height: height ? height : 50,
          width: width ? width : DIMENSIONS.width - 50,
          backgroundColor: '#fff',
          marginBottom: 10,
          borderRadius: 10,
          padding: 10,
          fontSize: 12,
          border: err ? 2 : 0,
        }}
        placeholderTextColor={'grey'}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
