import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT} from '../constants/constants';
import Container from '../components/Container';

const Appointment = () => {
  return (
    <Container>
      <Text style={{...FONT.header}}>Appointment</Text>
    </Container>
  );
};

export default Appointment;

const styles = StyleSheet.create({});
