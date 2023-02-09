import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONT, DIMENSIONS} from '../constants/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Button = ({onPress, style, title, style1}) => {
  // const {onPress, style, title, style1} = props;
  return (
    // <View style={{...styles.Button, ...style}}>
    <TouchableOpacity
      activeOpacity={0.8}
      style={{...styles.Button, ...style}}
      onPress={onPress}>
      <Text style={{...FONT?.header, color: '#fff', ...style1}}>{title}</Text>
    </TouchableOpacity>
    // </View>
  );
};

const RoundedButton = props => {
  const {onPress, icon, style} = props;
  return (
    // <View style={{...styles.roundButton, ...style}}>
    <TouchableOpacity
      style={{
        width: DIMENSIONS.height / 20,
        height: DIMENSIONS.height / 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: DIMENSIONS.height / 40,
        backgroundColor: COLORS.blue,
        marginHorizontal: 10,
        ...style,
      }}
      activeOpacity={0.8}
      onPress={onPress}>
      {icon}
    </TouchableOpacity>
    // </View>
  );
};

const IconTitle = ({icon, value}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        // justifyContent: 'center',
      }}>
      {icon}
      <Text style={{...FONT.title, color: 'gray', paddingLeft: 10}}>
        {value}
      </Text>
    </View>
  );
};

export {Button, RoundedButton, IconTitle};

const styles = StyleSheet.create({
  Button: {
    width: '100%',
    height: 52,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    marginVertical: 10,
    elevation: 10,
    shadowColor: `${COLORS?.blue}`,
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
