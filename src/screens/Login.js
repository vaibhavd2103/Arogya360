import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  setAuthenticated,
  setUserData,
  setUserId,
  setUserType,
} from '../redux/actions';
// ------------------------------COmponents and Constants----------------------------------------
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import Input from '../components/TextInput';
import {Button} from '../components/Buttons';
// --------------------------------------Icons--------------------------------------------------------
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import API from '../axios/api';
import ModalLoader from '../components/ModalLoader';

// ---------------------------------------------------------------------------------------------------
const Login = ({navigation}) => {
  const dispatch = useDispatch();
  // ---------------------------------------------UseState-----------------------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({
    email: '',
    password: '',
    msg: '',
  });
  const [user, setUser] = useState('1');
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  // --------------------------------------------Validation----------------------------------------------
  const signIn = async () => {
    setLoading(true);
    const data = {
      email: email,
      password: password,
      userType: user,
    };

    await API.login(data)
      .then(res => {
        console.log(res?.data);

        if (res?.data?.token) {
          dispatch(setUserId(res?.data?.user?._id));
          dispatch(setUserData(res?.data?.user));
          dispatch(setUserType(res?.data?.user?.userType));
          dispatch(setAuthenticated(true));
        }
        // setErr({...err, msg: res?.data?.error});
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log(err?.response?.data);
        setErr({...err, msg: err?.response?.data?.title});
        // setErr({...err, msg: res?.data?.error});
      });
  };
  const login = () => {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '') {
      setErr({...err, email: 'Email cannot be empty'});
    } else if (!emailRegex?.test(email)) {
      setErr({...err, email: 'Enter valid email id'});
    } else if (password === '') {
      setErr({...err, password: 'Password cannot be empty'});
    } else {
      signIn();
      setErr({...err, email: '', password: ''});
    }
  };

  // -------------------------------------------------------------------------------------------------------

  return (
    <ScrollView
      style={{
        width: '100%',
        height: DIMENSIONS?.height,
        // backgroundColor: COLORS?.yellow,
      }}
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
      <Container style={{...styles.Container}}>
        {/* ----------------------------------------------Header-------------------------------------------- */}
        <Text
          style={{
            ...FONT.header,
            marginBottom: 20,
            fontSize: 20,
          }}>
          Sign In
        </Text>
        <View style={styles.toptabuser}>
          <TouchableOpacity
            onPress={() => {
              setUser('1');
              // dispatch(setUserType('1'));
            }}
            style={{
              ...styles.userbutton,
              backgroundColor: user === '1' ? COLORS.blue : '#fff',
            }}>
            <Text
              style={{
                ...FONT?.title,
                color: user === '1' ? '#fff' : COLORS.light_black,
              }}>
              Patient
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setUser('2');
              // dispatch(setUserType('2'));
            }}
            style={{
              ...styles.userbutton,
              backgroundColor: user === '2' ? COLORS.blue : '#fff',
            }}>
            <Text
              style={{
                ...FONT?.title,
                color: user === '2' ? '#fff' : COLORS.light_black,
              }}>
              Doctor
            </Text>
          </TouchableOpacity>
        </View>
        {/* ------------------------------------------DOCTOR----------------------------------------------------------- */}
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
              setErr({...err, email: '', msg: ''});
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
              width: DIMENSIONS.width - 60,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Input
              secureTextEntry={secure}
              onChangeText={text => {
                setPassword(text);
                setErr({...err, password: '', msg: ''});
              }}
              value={password}
              err={err?.password}
              placeholder="Password"
              placeholderTextColor="#9098AC"
              style={{
                color: '#000',
              }}
            />
            <Entypo
              name={secure ? 'eye-with-line' : 'eye'}
              size={20}
              color="grey"
              onPress={() => setSecure(!secure)}
              style={{right: 10, position: 'absolute', padding: 10}}
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
          {err?.msg && (
            <Text
              style={{
                ...FONT.subTitle,
                color: COLORS.error,
                fontSize: 12,
                paddingTop: 10,
              }}>
              {err?.msg}
            </Text>
          )}
          {/* ----------------------------------LOGIN BUTTON------------------------------------------------- */}
          <Button
            title="Sign In"
            style={{width: DIMENSIONS.width - 50, marginTop: 50}}
            onPress={() => {
              login();
            }}
          />

          {/* ---------------------------------------------Sign up button----------------------------------- */}
          <View style={styles.signUpView}>
            <Text style={{...FONT.subTitle}}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => {
                setEmail('');
                setPassword('');
                navigation.navigate(ROUTES.signup);
              }}>
              <Text style={{...FONT.header, fontSize: 14, bottom: 3}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </>
        {/* -----------------------------------------Google SignIn--------------------------------------------------- */}
        {/* <Text style={{color: 'grey', marginTop: 30}}>Or</Text>
        <TouchableOpacity
          style={styles.googleView}
          onPress={() => dispatch(setAuthenticated(true))}>
          <AntDesign name="google" size={24} color={COLORS.blue} />
          <Text style={styles.googleText}>Signin with Google</Text>
        </TouchableOpacity> */}
      </Container>
      <ModalLoader loading={loading} />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: DIMENSIONS?.height,
    width: '100%',
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
    width: DIMENSIONS.width - 60,
    marginTop: 30,
    justifyContent: 'center',
    height: 52,
    marginBottom: 20,
  },
  googleText: {
    ...FONT.subTitle,
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
