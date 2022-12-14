import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';

const Input = ({placeholder, onChangeText, value, height, width, err}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        style={{
          height: height ? height : 50,
          width: width ? width : DIMENSIONS.width - 60,
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
          fontSize: 12,
          borderWidth: err ? 1 : 0,
          borderColor: COLORS.error,
          ...FONT.title,
          elevation: 20,
          shadowColor: err ? `${COLORS.error}aa` : `${COLORS.blue}cc`,
          // shadowOpacity: 0.2,
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
