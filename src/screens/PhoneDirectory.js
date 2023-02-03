import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import CustomHeader from '../components/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FONT} from '../constants/constants';
import PhoneNumbers from '../components/PhoneNumbers';
import {not} from 'react-native-reanimated';

const PhoneDirectory = () => {
  const numbers = [
    {
      id: '1',
      name: 'OPD APPOINTMENTS',
      num: '9865327410',
    },
    {
      id: '2',
      name: '24 Hours',
      num: '9865327410',
    },
    {
      id: '3',
      name: 'EMERGENCY TREATMENT/AMBULANCE',
      num: '9865327410',
    },
    {
      id: '4',
      name: 'TOLL FREE NUMBER',
      num: '9865327410',
    },
    {
      id: '5',
      name: 'HOME SAMPLE COLLECTION',
      num: '9865327410',
    },
    {
      id: '6',
      name: 'EMERGENCY TREATMENT/AMBULANCE',
      num: '9865327410',
    },
    {
      id: '7',
      name: 'EMERGENCY TREATMENT/AMBULANCE',
      num: '9865327410',
    },
    {
      id: '8',
      name: 'EMERGENCY TREATMENT/AMBULANCE',
      num: '9865327410',
    },
    {
      id: '9',
      name: 'CHILD CARE',
      num: '9865327410',
    },
  ];
  return (
    <Container>
      <CustomHeader
        style={{width: '100%'}}
        title="Phone Directory"
        LeftIcon={() => {
          return (
            <MaterialCommunityIcons name="menu-open" size={24} color="black" />
          );
        }}
        onLeftIconPress={() => props.navigation.openDrawer()}
      />
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text style={{...FONT.header}}>Important Contact Details</Text>
        </View>
        <FlatList
          data={numbers}
          keyExtractor={item => item?.id}
          renderItem={({item}) => {
            return <PhoneNumbers item={item} />;
          }}
        />
      </View>
    </Container>
  );
};

export default PhoneDirectory;

const styles = StyleSheet.create({});
