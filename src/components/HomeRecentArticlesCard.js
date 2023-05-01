import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AVATAR_KEY} from '../../config';
const HomeRecentArticlesCard = ({item, index, length}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS?.white,
        width: DIMENSIONS?.width - 40,
        marginLeft: index == 0 ? 20 : 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: index == length - 1 ? 20 : 0,
        marginBottom: 20,
        elevation: 10,
        shadowColor: `${COLORS?.blue}aa`,
        // shadowColor: `#0007`,
        marginTop: 10,
      }}>
      <View>
        <Image
          source={{
            //  uri: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.doctor}&background_color=003467&is_bold=true`,
          }}
          style={{height: 80, width: 80, borderRadius: 10, marginBottom: 5}}
        />
        <Text
          style={{
            ...FONT?.title,
            color: COLORS?.light_black,
            maxWidth: 100,
            // textAlign: 'center',
          }}>
          {item?.doctor}
        </Text>
      </View>
      <View style={{marginLeft: 20}}>
        <View style={{flexDirection: 'row'}}>
          <AntDesign
            name="checksquareo"
            size={18}
            color={COLORS?.light_black}
            style={{marginRight: 0}}
          />
          <Text
            style={{
              ...FONT?.title,
              color: COLORS?.light_black,
              marginBottom: 0,
            }}>
            {' - '}
          </Text>
          <Text
            style={{
              ...FONT?.title,
              color: COLORS?.light_black,
              maxWidth: DIMENSIONS?.width - 220,
              marginBottom: 5,
            }}>
            {item?.reason}
          </Text>
        </View>
        <Text
          style={{...FONT?.title, color: COLORS?.light_black, marginBottom: 5}}>
          <AntDesign
            name="calendar"
            size={18}
            color={COLORS?.light_black}
            style={{marginRight: 10}}
          />
          {' - '}
          {item?.date}
        </Text>
        <Text
          style={{...FONT?.title, color: COLORS?.light_black, marginBottom: 0}}>
          <AntDesign
            name="clockcircleo"
            size={18}
            color={COLORS?.light_black}
            style={{marginRight: 10}}
          />
          {' - '}
          {item?.time}
        </Text>
      </View>
    </View>
  );
};

export default HomeRecentArticlesCard;

const styles = StyleSheet.create({});
