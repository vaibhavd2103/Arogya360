import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../constants/contants';

const PhoneNumbers = ({item}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingVertical: 2,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          width: '50%',
          backgroundColor: COLORS.blue,
          justifyContent: 'space-between',
          paddingRight: 10,
        }}>
        <Text style={{...FONT.title, padding: 12}}>{item.name}</Text>
      </View>
      <View style={{backgroundColor: '#E2E2E2', width: '50%'}}>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              ...FONT.title,
              padding: 12,
              textDecorationLine: 'underline',
              color: 'blue',
            }}>
            {item.num}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneNumbers;

const styles = StyleSheet.create({});
