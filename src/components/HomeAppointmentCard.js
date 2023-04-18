import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AVATAR_KEY} from '../../config';
const HomeAppointmentCard = ({item, index, length}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS?.green,
        width: DIMENSIONS?.width - 40,
        marginLeft: index == 0 ? 20 : 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: index == length - 1 ? 20 : 0,
        marginBottom: 20,
        elevation: 20,
        shadowColor: COLORS?.green,
        marginTop: 10,
      }}>
      <View>
        <Image
          source={{
            //  uri: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.user?.name}&background_color=003467&is_bold=true`,
          }}
          style={{height: 80, width: 80, borderRadius: 10, marginBottom: 5}}
        />
      </View>
      <View style={{marginLeft: 20}}>
        {/* <View style={{flexDirection: 'row'}}>
          <AntDesign
            name="checksquareo"
            size={18}
            color={'#fff'}
            style={{marginRight: 0, top: 2}}
          />
          <Text style={{...FONT?.title, color: '#fff', marginBottom: 0}}>
            {' - '}
          </Text>
          <Text
            style={{
              ...FONT?.title,
              color: '#fff',
              maxWidth: DIMENSIONS?.width - 220,
              marginBottom: 5,
            }}>
            {item?.reason}
          </Text>
        </View> */}
        <Text
          style={{
            ...FONT?.title,
            color: '#fff',
            maxWidth: 150,
            // textAlign: 'center',
          }}>
          {item?.user?.name}
        </Text>
        <Text style={{...FONT?.title, color: '#fff', marginBottom: 5}}>
          <AntDesign
            name="calendar"
            size={18}
            color={'#fff'}
            style={{marginRight: 10, top: 2}}
          />
          {' - '}
          {item?.appointmentDate}
        </Text>
        <Text style={{...FONT?.title, color: '#fff', marginBottom: 0}}>
          <AntDesign
            name="clockcircleo"
            size={18}
            color={'#fff'}
            style={{marginRight: 10, top: 2}}
          />
          {' - '}
          {item?.appointmentTime}
        </Text>
      </View>
    </View>
  );
};

export default HomeAppointmentCard;

const styles = StyleSheet.create({});
