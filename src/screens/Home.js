import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT} from '../constants/contants';
import Location from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Location name="location" size={21} color={'red'} />
      <FontAwesome name="bookmark" size={24} color="black" />
      <Icon.Button name="facebook" backgroundColor="#3b5998" size={24} />
      <Text style={{color: 'black', fontSize: 16}}>Home</Text>
      <Text style={{...FONT.header}}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
