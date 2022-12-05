import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import Container from './../components/Container';
import {COLORS, FONT} from '../constants/contants';
import Entypo from 'react-native-vector-icons/Entypo';

const Profile = ({navigation}) => {
  return (
    <Container style={{paddingHorizontal: 25, alignItems: 'center'}}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center', flex: 1}}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
          }}
          style={styles.profilePic}
        />
        <Text style={{...FONT.header, paddingVertical: 10}}>Profile Name</Text>
        <Text style={{...FONT.title, color: 'gray'}}>29 Years old</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            width: '100%',
            marginTop: 10,
          }}>
          <View style={styles.boxes}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Entypo name="dot-single" size={30} color={COLORS.blue} />
              <Text style={{...FONT.subTitle, color: 'gray'}}>Weight</Text>
            </View>
            <Text style={{...FONT.header, fontSize: 18, paddingLeft: 30}}>
              55kg
            </Text>
          </View>
          <View style={styles.boxes}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Entypo name="dot-single" size={30} color={COLORS.blue} />
              <Text style={{...FONT.subTitle, color: 'gray'}}>Height</Text>
            </View>
            <Text style={{...FONT.header, fontSize: 18, paddingLeft: 30}}>
              170cm
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 40,
  },
  boxes: {
    width: '40%',
    backgroundColor: COLORS.white,
    height: 70,
    borderRadius: 10,
    elevation: 2,
    padding: 5,
  },
});
