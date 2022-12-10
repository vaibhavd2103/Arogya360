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
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const [err, setErr] = useState({
    messege: '',
  });
  const signup = () => {
    if (email === '' || password === '' || fullName === '') {
      setErr({...err, messege: 'Fill all mandatory fields'});
      console.log(err);
    } else {
      setErr({...err, messege: ''});
      //  navigation.navigate(ROUTES.tabNav);
    }
  };
  return (
    <Container style={{...styles.signupContainer}}>
      <Text
        style={{
          ...FONT.header,
          marginBottom: 20,
          marginTop: 30,
          fontSize: 20,
        }}>
        Register
      </Text>
      <View
        style={{
          ...styles.signuptoptab,
          // marginBottom: 10,
          // backgroundColor: 'green',
        }}>
        <TouchableOpacity
          onPress={() => {
            setUser('patient');
          }}
          style={{
            ...styles.userbutton,
            backgroundColor: user === 'patient' ? COLORS.blue : '#fff',
            elevation: user === 'patient' ? 20 : 0,
            shadowColor: COLORS.blue,
          }}>
          <Text
            style={{
              ...FONT?.title,
              color: user === 'patient' ? '#fff' : COLORS.light_black,
            }}>
            Patient
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setUser('doctor');
          }}
          style={{
            ...styles.userbutton,
            backgroundColor: user === 'doctor' ? COLORS.blue : '#fff',
            elevation: user === 'patient' ? 20 : 0,
            shadowColor: COLORS.blue,
          }}>
          <Text
            style={{
              ...FONT?.title,
              color: user === 'doctor' ? '#fff' : COLORS.light_black,
            }}>
            Doctor
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          Full Name <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Full Name'}
          onChangeText={text => {
            setFullName(text);
            setErr({...err, messege: ''});
          }}
          value={fullName}
        />

        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          Email <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Email'}
          onChangeText={text => {
            setEmail(text);
            setErr({...err, messege: ''});
          }}
          value={email}
        />

        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          Mobile Number <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Mobile Number'}
          onChangeText={text => {
            setMobileNumber(text);
            setErr({...err, messege: ''});
          }}
          value={mobileNumber}
        />

        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          Password <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Password'}
          onChangeText={text => {
            setPassword(text);
            setErr({...err, messege: ''});
          }}
          value={password}
        />

        {/* <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          Confirm Password <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Confirm Password'}
         onChangeText = {(text)=>{
          setFullName(text)
          
         }}
         value= {fullName}

        /> */}

        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          Date of Birth <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Date of Birth'}
          onChangeText={text => {
            setDob(text);
            setErr({...err, messege: ''});
          }}
          value={dob}
        />
        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          `` Gender <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Gender'}
          onChangeText={text => {
            setGender(text);
            setErr({...err, messege: ''});
          }}
          value={gender}
        />
        {err?.messege && (
          <Text
            style={{
              ...FONT.subTitle,
              color: COLORS.error,
              fontSize: 12,
              paddingTop: 10,
              marginBottom: 10,
            }}>
            {err?.messege}
          </Text>
        )}

        <Button
          title="Register"
          style={{width: DIMENSIONS.width - 50, marginTop: 50}}
          onPress={() => {
            // error();
            signup();
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
    // paddingHorizontal: 30,
    paddingBottom: 70,
  },
  signupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
    // paddingHorizontal: 30,
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
    marginBottom: 70,
  },
  googleText: {
    ...FONT.subTitle,
    marginRight: 30,
    color: COLORS.light_black,
  },
  signuptoptab: {
    // width: DIMENSIONS.width - 60,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    width: DIMENSIONS.width - 60,
  },
  userbutton: {
    // height: '100%',
    // width: '50%',
    // padding: 10,
    padding: 10,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
  },
  placeholderText: {
    width: '100%',
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 60,
  },
});
