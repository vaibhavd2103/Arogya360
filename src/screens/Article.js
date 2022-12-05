import {StyleSheet, View, StatusBar, Image, Text} from 'react-native';
import React, {useEffect} from 'react';

import CustomHeader from '../components/CustomHeader';
import {FONT} from '../constants/contants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from './../components/Container';

const Article = props => {
  return (
    <Container>
      <CustomHeader
        style={{width: '100%'}}
        title="Article"
        LeftIcon={() => {
          return (
            <MaterialCommunityIcons name="menu-open" size={24} color="black" />
          );
        }}
        onLeftIconPress={() => props.navigation.openDrawer()}
      />
      <Text style={{...FONT.header}}>Chat</Text>
    </Container>
  );
};

export default Article;

const styles = StyleSheet.create({});
