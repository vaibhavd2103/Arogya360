import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT} from '../constants/contants';
import Container from './../components/Container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {IconTitle} from '../components/Buttons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const About = () => {
  return (
    <Container style={{padding: 25}}>
      {/* <Text style={{...FONT.header}}>About</Text> */}

      <IconTitle
        value="+91 9175954524"
        icon={<Feather name="phone-call" size={24} color="black" />}
      />
      <IconTitle
        icon={
          <MaterialCommunityIcons
            name="email-open-outline"
            size={24}
            color="black"
          />
        }
        value="abc@gmail.com"
      />
      <IconTitle
        icon={<FontAwesome name="birthday-cake" size={24} color="black" />}
        value="20/11/2001"
      />
      <IconTitle
        icon={<FontAwesome name="transgender" size={24} color="black" />}
        value="Male"
      />
      <IconTitle
        icon={<Entypo name="drop" size={20} color="red" />}
        value="A+"
      />
    </Container>
  );
};

export default About;

const styles = StyleSheet.create({});
