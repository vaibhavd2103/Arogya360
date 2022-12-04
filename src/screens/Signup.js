import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import Input from '../components/TextInput';
import {COLORS, DIMENSIONS, FONT} from '../constants/contants';
import {Button} from '../components/Buttons';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';

const Signup = () => {
  const [user, setUser] = useState('patient');
  return (
    <Container style={{...styles.signupContainer}}>
      <Text style={{...FONT.title, fontSize: 20, marginBottom: 10}}>
        Register
      </Text>
      <View style={{...styles.signuptoptab, marginBottom: 10}}>
        <TouchableOpacity
          onPress={() => {
            setUser('patient');
          }}
          style={{
            ...styles.userbutton,
            backgroundColor: user === 'patient' ? COLORS.blue : '#fff',
          }}>
          <Text>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUser('doctor');
          }}
          style={{
            ...styles.userbutton,
            backgroundColor: user === 'doctor' ? COLORS.blue : '#fff',
          }}>
          <Text>Doctor</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
          Full Name <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Input
          placeholder={'Full Name'}
          // onChangeText={()=>{}}
          // value={}
        />

        <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
          Email <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Input
          placeholder={'Email'}
          // onChangeText={()=>{}}
          // value={}
        />

        <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
          Mobile Number <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Input
          placeholder={'Mobile Number'}
          // onChangeText={()=>{}}
          // value={}
        />

        <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
          Password <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Input
          placeholder={'Password'}
          // onChangeText={()=>{}}
          // value={}
        />

        <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
          Confirm Password <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Input
          placeholder={'Confirm Password'}
          // onChangeText={()=>{}}
          // value={}
        />

        <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
          Date of Birth <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Input
          placeholder={'Date of Birth'}
          // onChangeText={()=>{}}
          // value={}
        />
        <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
          Gender <Text style={{color: 'red'}}>*</Text>
        </Text>
        <Input
          placeholder={'Gender'}
          // onChangeText={()=>{}}
          // value={}
        />

        <Button
          title="Register"
          style={{width: DIMENSIONS.width - 50, marginTop: 10}}
          onPress={() => {
            // error();
          }}
        />
        <View style={styles.signInView}>
          <Text style={{...FONT.subTitle}}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate(ROUTES.signup);
            }}>
            <Text style={{...FONT.subTitle, fontWeight: '800'}}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={{color: 'grey', marginTop: 20}}>Or</Text>

        <TouchableOpacity style={styles.googleView}>
          <AntDesign name="google" size={24} color="black" />
          {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}
          {/* <MaterialCommunityIcons name="menu-open" size={24} color="black" /> */}
          <Text style={styles.googleText}>Signin with Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default Signup;

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
  },
  signupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 10,
  },
  signInView: {
    flexDirection: 'row',
    marginTop: 5,
  },
  googleView: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderRadius: 10,
    width: DIMENSIONS.width - 50,
    marginTop: 10,
    justifyContent: 'space-around',
  },
  googleText: {
    ...FONT.subTitle,
    marginRight: 30,
    color: COLORS.light_black,
  },
  signuptoptab: {
    width: DIMENSIONS.width - 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userbutton: {
    // height: '100%',
    // width: DIMENSIONS.width / 2,
    padding: 10,
  },
});
