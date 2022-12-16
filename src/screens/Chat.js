import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {FONT} from '../constants/constants';
import CustomHeader from '../components/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Chat = props => {
  return (
    <Container>
      <CustomHeader
        style={{width: '100%'}}
        title="Chat"
        LeftIcon={() => {
          return (
            <MaterialCommunityIcons name="menu-open" size={24} color="black" />
          );
        }}
        onLeftIconPress={() => props.navigation.goBack()}
      />
      <Text style={{...FONT.header}}>Chat</Text>
    </Container>
  );
};

export default Chat;

const styles = StyleSheet.create({});
