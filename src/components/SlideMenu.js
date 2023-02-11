import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';

const SlideMenu = ({navigation}) => {
  const options = [
    {
      id: '1',
      name: 'Appointment',
      icon: (
        <Foundation name="calendar" size={30} color={COLORS?.light_black} />
      ),
      navigation: ROUTES.appointment,
    },
    {
      id: '2',
      name: 'Medicine Tracker',
      icon: (
        <FontAwesome5 name="capsules" size={24} color={COLORS?.light_black} />
      ),
      navigation: ROUTES.medicinetracker,
    },
    {
      id: '3',
      name: 'Phone Directory',
      icon: <FontAwesome name="phone" size={24} color={COLORS?.light_black} />,
      navigation: ROUTES.phonedirectory,
    },
    {
      id: '4',
      name: 'Find a Doctor',
      icon: <Fontisto name="doctor" size={24} color={COLORS?.light_black} />,
      navigation: ROUTES.finddoctor,
    },
    {
      id: '5',
      name: 'Settings',
      icon: <Ionicons name="settings" size={24} color={COLORS?.light_black} />,
      navigation: ROUTES.settings,
    },
    {
      id: '6',
      name: 'BMI Checker',
      icon: <Entypo name="calculator" size={24} color={COLORS?.light_black} />,
      navigation: ROUTES.bmichecker,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          height: DIMENSIONS?.height / 4,
          backgroundColor: `${COLORS?.blue}`,
          alignItems: 'center',
        }}
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ROUTES.profile)}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
          }}
          style={{
            height: '80%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <Text
          style={{
            ...FONT?.header,
            fontSize: 18,
            color: '#fff',
            marginTop: 10,
            position: 'absolute',
            bottom: 10,
          }}>
          Tanisha Thakur
        </Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        {options.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate(item.navigation);
              }}
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: 'center',
                height: 50,
                borderRadius: 20,
                width: '95%',
              }}
              activeOpacity={0.7}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                }}>
                {item.icon}
              </View>
              <Text
                style={{
                  ...FONT?.title,
                  marginLeft: 20,
                  color: COLORS.light_black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <View
          style={{
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: COLORS?.blue,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginVertical: 10,
              alignItems: 'center',
              borderRadius: 20,
              justifyContent: 'center',
              height: 45,
              borderColor: COLORS?.blue,
              borderWidth: 1,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text
              style={{
                ...FONT.header,
                color: COLORS.blue,
              }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SlideMenu;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
