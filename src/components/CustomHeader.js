import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONT, ROUTES, DIMENSIONS} from '../constants/constants';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = props => {
  const {
    LeftIcon,
    RightIcon,
    RightIcon2,
    title,
    onLeftIconPress,
    onRightIconPress,
    onRightIcon2Press,
    bgColor,
  } = props;
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        // marginTop: 40,
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: bgColor ? bgColor : COLORS.background,
        elevation: 10,
        width: DIMENSIONS.width,
      }}>
      <View
        style={{
          flexDirection: 'row',
          //   backgroundColor: COLORS.blue,
          alignItems: 'center',
        }}>
        {LeftIcon ? (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              padding: 4,
            }}
            onPress={onLeftIconPress}>
            <LeftIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              width: DIMENSIONS.height / 20,
              height: DIMENSIONS.height / 20,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: DIMENSIONS.height / 40,
              backgroundColor: '#E3EFFF',
              marginHorizontal: 10,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Back name={'chevron-left'} size={30} color={COLORS.light_black} />
          </TouchableOpacity>
        )}
        {title && (
          <Text style={{...FONT.header, marginLeft: 10, fontSize: 18}}>
            {title}
          </Text>
        )}
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {RightIcon2 && (
          <TouchableOpacity
            style={{
              padding: 7,
              //  backgroundColor: 'pink',
            }}
            activeOpacity={0.8}
            onPress={onRightIcon2Press}>
            <RightIcon2 />
          </TouchableOpacity>
        )}
        {RightIcon && (
          <TouchableOpacity
            style={{
              padding: 7,
              // backgroundColor: '#FFF',
            }}
            activeOpacity={0.8}
            onPress={onRightIconPress}>
            <RightIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
