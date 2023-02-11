import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Bmi from '../components/Bmi';
import Container from '../components/Container';
import CustomHeader from '../components/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native';

const BMIChecker = props => {
  return (
    <Container>
      <CustomHeader
        style={{width: '100%'}}
        title="BMI Checker"
        LeftIcon={() => {
          return (
            <MaterialCommunityIcons name="menu-open" size={24} color="black" />
          );
        }}
        onLeftIconPress={() => props.navigation.openDrawer()}
      />
      <Bmi />
    </Container>
  );
};

export default BMIChecker;

const styles = StyleSheet.create({});
