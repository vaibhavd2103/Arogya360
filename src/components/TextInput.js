import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';

const Input = ({
  placeholder,
  onChangeText,
  value,
  height,
  width,
  err,
  secureTextEntry,
  keyboardType,
  editable,
  style,
  props,
}) => {
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
          shadowColor: err ? `${COLORS.error}` : `${COLORS.blue}cc`,
          ...style,
        }}
        placeholderTextColor={'grey'}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={editable}
        {...props}
      />
    </View>
  );
};

export const NormalInput = ({
  title,
  placeholder,
  onChangeText,
  value,
  height,
  width,
  err,
  secureTextEntry,
  keyboardType,
  editable,
  multiline,
  numberOfLines,
  style,
}) => {
  return (
    <View style={{marginVertical: 6}}>
      {title && (
        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          {title}
        </Text>
      )}

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
          borderColor: err ? COLORS.error : null,
          ...FONT.title,
          ...style,
          elevation: 20,
          shadowColor: err ? `${COLORS.Red}aa` : `${COLORS.blue}cc`,
          shadowOpacity: 0.2,
        }}
        placeholderTextColor={'grey'}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        editable={editable}
        selectionColor={COLORS.accentColor}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
