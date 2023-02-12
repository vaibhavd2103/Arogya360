import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Actionsheet} from 'native-base';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import Entypo from 'react-native-vector-icons/Entypo';

const DropDown = ({
  onPress,
  value,
  height,
  width,
  err,
  placeholder,
  style,
  style1,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', ...style1}}>
      <TouchableOpacity
        onPress={onPress}
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
          justifyContent: 'center',
          elevation: 20,
          shadowColor: err ? `${COLORS.error}aa` : `${COLORS.blue}cc`,
          ...style,
          // shadowOpacity: 0.2,
        }}>
        <Text
          style={{...FONT.title, color: value ? COLORS?.light_black : 'grey'}}>
          {value ? value : placeholder}
        </Text>
      </TouchableOpacity>
      <Entypo
        name="chevron-thin-down"
        size={22}
        color="grey"
        style={{position: 'absolute', right: 20}}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
