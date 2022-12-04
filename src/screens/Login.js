import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/contants';
import Input from '../components/TextInput';
import {Button} from '../components/Buttons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [user, setUser] = useState('patient');

  const error = () => {
    if (email === '') {
      setErr('Email cannot be empty');
      // console.log(err);
    } else if (password === '') {
      setErr('Password cannot be empty');
    } else {
      setErr('');
    }
  };

  return (
    <ScrollView>
      <Container style={{...styles.Container}}>
        <Text style={{...FONT.header, marginBottom: 20}}>Sign In</Text>
        <Text
          style={{
            ...FONT.subTitle,
            justifyContent: 'flex-start',
            width: '90%',
            // marginBottom: 5,
            padding: 5,
          }}>
          Sign in as :{' '}
        </Text>
        <View style={styles.toptabuser}>
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

        {user === 'patient' ? (
          <>
            <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
              Email <Text style={{color: 'red'}}>*</Text>
            </Text>
            <Input
              placeholder={'Enter email'}
              onChangeText={text => {
                setEmail(text);
                // console.log(text);
              }}
              value={email}
              err={err}
            />
            <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
              Password <Text style={{color: 'red'}}>*</Text>
            </Text>
            <Input
              placeholder={'Password'}
              onChangeText={text => {
                setPassword(text);
                // console.log(text);
              }}
              value={password}
            />
            {err && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: 'red',
                  fontSize: 12,
                  paddingTop: 10,
                  marginBottom: 10,
                }}>
                {err}
              </Text>
            )}

            <View style={styles.signUpView}>
              <Text style={{...FONT.subTitle}}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.signup);
                }}>
                <Text style={{...FONT.subTitle, fontWeight: '800'}}>
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>

            <Button
              title="Signin"
              style={{width: DIMENSIONS.width - 50, marginTop: 10}}
              onPress={() => {
                error();
              }}
            />
          </>
        ) : (
          <>
            <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
              Email <Text style={{color: 'red'}}>*</Text>
            </Text>
            <Input
              placeholder={'Enter email'}
              onChangeText={text => {
                setEmail(text);
                // console.log(text);
              }}
              value={email}
              err={err}
            />
            <Text style={{...FONT.subTitle, width: '85%', padding: 5}}>
              Password <Text style={{color: 'red'}}>*</Text>
            </Text>
            <Input
              placeholder={'Password'}
              onChangeText={text => {
                setPassword(text);
                // console.log(text);
              }}
              value={password}
            />
            {err && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: 'red',
                  fontSize: 12,
                  paddingTop: 10,
                  marginBottom: 10,
                }}>
                {err}
              </Text>
            )}

            <View style={styles.signUpView}>
              <Text style={{...FONT.subTitle}}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.signup);
                }}>
                <Text style={{...FONT.subTitle, fontWeight: '800'}}>
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>

            <Button
              title="Signin"
              style={{width: DIMENSIONS.width - 50, marginTop: 10}}
              onPress={() => {
                error();
              }}
            />
          </>
        )}

        <Text style={{color: 'grey', marginTop: 30}}>Or</Text>

        <TouchableOpacity style={styles.googleView}>
          {/* <AntDesign name="google" size={24} color="black" /> */}
          <Icon name="ios-person" size={30} color="#4F8EF7" />
          <MaterialCommunityIcons name="menu-open" size={24} color="black" />
          <Text style={styles.googleText}>Signin with Google</Text>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpView: {
    flexDirection: 'row',
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
  toptabuser: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 70,
  },
  userbutton: {
    padding: 10,
    width: '45%',
    borderRadius: 10,
  },
});
