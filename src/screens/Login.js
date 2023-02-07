import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import Input from '../components/TextInput';
import {Button} from '../components/Buttons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {setAuthenticated} from '../redux/actions';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({
    email: '',
    password: '',
  });
  const [user, setUser] = useState('patient');
  const [secure, setSecure] = useState(true);

  const login = () => {
    if (email === '') {
      setErr({...err, email: 'Email cannot be empty'});
      // console.log(err);
    } else if (password === '') {
      setErr({...err, password: 'Password cannot be empty'});
    } else {
      setErr({...err, email: '', password: ''});
      dispatch(setAuthenticated(true));
    }
  };

  return (
    <ScrollView
      style={{width: '100%', height: '100%'}}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      <Container style={{...styles.Container}}>
        <Text
          style={{
            ...FONT.header,
            marginBottom: 20,
            marginTop: DIMENSIONS.height / 8,
            fontSize: 20,
          }}>
          Sign In
        </Text>
        {/* <Image
          source={require('../assets/login.png')}
          style={{width: '100%', height: DIMENSIONS.width - 60}}
        /> */}
        <Text
          style={{
            ...FONT.subTitle,
            marginBottom: 10,
          }}>
          Sign in as :
        </Text>
        <View style={styles.toptabuser}>
          <TouchableOpacity
            onPress={() => {
              setUser('patient');
            }}
            style={{
              ...styles.userbutton,
              backgroundColor: user === 'patient' ? COLORS.blue : '#fff',
              // elevation: user === 'patient' ? 20 : 0,
              // shadowColor: COLORS.blue,
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
              // elevation: user === 'doctor' ? 20 : 0,
              // shadowColor: COLORS.blue,
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
        <>
          <Text
            style={{
              ...FONT.subTitle,
              width: '100%',
              marginBottom: 5,
            }}>
            Email <Text style={{color: COLORS.error}}>*</Text>
          </Text>
          <Input
            placeholder={'Enter email'}
            onChangeText={text => {
              setEmail(text);
              setErr({...err, email: ''});
            }}
            value={email}
            err={err?.email}
          />
          {err?.email && (
            <Text
              style={{
                ...FONT.subTitle,
                color: COLORS.error,
                fontSize: 12,
                paddingTop: 10,
              }}>
              {err?.email}
            </Text>
          )}
          {/* <Text
            style={{
              ...FONT.subTitle,
              width: '100%',
              marginBottom: 5,
              marginTop: 20,
            }}>
            Password <Text style={{color: COLORS.error}}>*</Text>
          </Text>
          <Input
            placeholder={'Password'}
            onChangeText={text => {
              setPassword(text);
              setErr({...err, password: ''});
            }}
            value={password}
            err={err?.password}
          />
          {err?.password && (
            <Text
              style={{
                ...FONT.subTitle,
                color: COLORS.error,
                fontSize: 12,
                paddingTop: 10,
                marginBottom: 10,
              }}>
              {err?.password}
            </Text>
          )} */}
          <Text
            style={{
              ...FONT.subTitle,
              width: '100%',
              marginBottom: 5,
              marginTop: 20,
            }}>
            Password <Text style={{color: COLORS.error}}>*</Text>
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Input
              // value={fields.password}
              secureTextEntry={secure}
              onChangeText={text => {
                setPassword(text);
                setErr({...err, password: ''});
              }}
              value={password}
              err={err?.password}
              placeholder="Password"
              placeholderTextColor="#9098AC"
              style={{
                // fontFamily: 'Poppins-Regular',
                color: '#000',
                width: '70%',
              }}
            />
            <Entypo
              name={secure ? 'eye-with-line' : 'eye'}
              size={20}
              color="black"
              onPress={() => setSecure(!secure)}
              style={{right: 10, position: 'absolute'}}
            />
          </View>
          {err?.password && (
            <Text
              style={{
                ...FONT.subTitle,
                color: COLORS.error,
                fontSize: 12,
                paddingTop: 10,
              }}>
              {err?.password}
            </Text>
          )}
          <Button
            title="Sign In"
            style={{width: DIMENSIONS.width - 50, marginTop: 50}}
            onPress={() => {
              login();
            }}
          />
          <View style={styles.signUpView}>
            <Text style={{...FONT.subTitle}}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.signup);
              }}>
              <Text style={{...FONT.subTitle, fontWeight: '800'}}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </>
        <Text style={{color: 'grey', marginTop: 30}}>Or</Text>
        <TouchableOpacity
          style={styles.googleView}
          onPress={() => dispatch(setAuthenticated(true))}>
          <AntDesign name="google" size={24} color={COLORS.blue} />
          {/* <Icon name="ios-person" size={30} color="#4F8EF7" /> */}
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
    paddingHorizontal: 30,
  },
  signUpView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  googleView: {
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    width: DIMENSIONS.width - 50,
    marginTop: 30,
    justifyContent: 'center',
    height: 52,
  },
  googleText: {
    ...FONT.subTitle,
    // marginRight: 30,
    color: COLORS.light_black,
    marginLeft: 10,
  },
  toptabuser: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    elevation: 20,
    shadowColor: COLORS?.blue,
  },
  userbutton: {
    padding: 10,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
  },
});
