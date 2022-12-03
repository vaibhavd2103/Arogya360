import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../constants/contants';
import Location from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import Container from '../components/Container';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from './../components/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, RoundedButton} from '../components/Buttons';
const Home = props => {
  return (
    <Container>
      <CustomHeader
        style={{width: '100%'}}
        title="Home"
        LeftIcon={() => {
          return (
            <MaterialCommunityIcons name="menu-open" size={24} color="black" />
          );
        }}
        onLeftIconPress={() => props.navigation.openDrawer()}
      />
      <View style={{paddingHorizontal: 25}}>
        <Back name={'chevron-left'} size={30} color={COLORS.light_black} />
        <Location name="location" size={21} color={'red'} />
        <FontAwesome name="bookmark" size={24} color="black" />

        <Text style={{color: 'black', fontSize: 16}}>Home</Text>
        <Text style={{...FONT.header}}>Home</Text>
        <Button title="CREATING CUSTOM BUTTONS" />
        <RoundedButton title="Login" />
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
