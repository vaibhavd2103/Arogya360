import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../constants/contants';

const Button = props => {
  const {onPress, style, title} = props;
  return (
    // <View style={{...styles.Button, ...style}}>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{...styles.Button, ...style}}
      onPress={onPress}>
      <Text style={{...FONT?.header, color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
    // </View>
  );
};

const RoundedButton = props => {
  const {onPress, style, title} = props;
  return (
    // <View style={{...styles.roundButton, ...style}}>
    <TouchableOpacity
      style={{...styles.roundButton, ...style}}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={{...FONT.header, color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
    // </View>
  );
};

export {Button, RoundedButton};

const styles = StyleSheet.create({
  Button: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    marginVertical: 10,
  },
  roundButton: {
    width: '100%',
    height: 52,

    borderTopLeftRadius: 26,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 26,
    borderBottomLeftRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    marginVertical: 10,
  },
});
