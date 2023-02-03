import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
//-------------------------------- import packages--------------------------------------
import DateTimePicker from 'react-native-modal-datetime-picker';

//------------------import components and constants-----------------------------------------
import Container from '../components/Container';
import Input from '../components/TextInput';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {Button} from '../components/Buttons';

//---------------------import icons---------------------------------------------------
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

const Signup = () => {
  //-----------------------------------------useState---------------------------------
  const [user, setUser] = useState('patient');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [radioGender, setRadioGender] = useState('');
  const [err, setErr] = useState({
    messege: '',
  });
  const [daterror, setDateError] = useState('');
  const [occasion, setOccasion] = useState([]);
  const [datemodal, setDateModal] = useState(false);
  const [dateValue, setDateValue] = useState('');
  const [date, setDate] = useState('');

  //--------------------------------------functions-------------------------------------

  const signup = () => {
    if (email === '' || password === '' || fullName === '') {
      setErr({...err, messege: 'Fill all mandatory fields'});
      console.log(err);
    } else {
      setErr({...err, messege: ''});
      //  navigation.navigate(ROUTES.tabNav);
    }
  };
  //-----------------------------datetime picker-----------------------------------------
  const FormatDate = data => {
    let dateTimeString =
      data.getFullYear() +
      '/' +
      ('0' + (data.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + data.getDate()).slice(-2);

    return dateTimeString;
  };

  const saveDetails = (val, index) => {
    let saveAnswer = occasion;
    saveAnswer.map((mapItem, mapIndex) => {
      console.log('mapIndex ::', mapIndex);
      if (mapIndex === index) {
        saveAnswer[mapIndex] = {...mapItem, dateInEpoch: val};
      }
    });
    setOccasion([...saveAnswer]);
  };

  const showDatePicker = () => {
    setDateModal(true);
    console.log('modal');
  };
  const handleConfirm = data => {
    setDate(FormatDate(data));
    saveDetails(FormatDate(data), dateIndex);
    // console.log(FormatDate(data));
    setDateValue(FormatDate(data));
    setDateModal(false);
  };

  const hideDatePicker = () => {
    setDateModal(false);
  };
  //--------------------------------------------------------------------------------------

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
          ...styles.signUpTopTab,
          // marginBottom: 10,
          // backgroundColor: 'green',
        }}>
        <TouchableOpacity
          onPress={() => {
            setUser('patient');
          }}
          style={{
            ...styles.userButton,
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
            ...styles.userButton,
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
          keyboardType="numeric"
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
        <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          Date of Birth <Text style={{color: COLORS.error}}>*</Text>
        </Text>
        {/* <TouchableOpacity
          onPress={value => {
            showDatePicker();
            setDate(value);
            // setDateIndex(index);
            setDateError('');
          }}>
          <Input
            placeholder={'Date of Birth'}
            onChangeText={text => {
              setDob(text);
              setErr({...err, messege: ''});
            }}
            value={dob}
          />
        </TouchableOpacity> */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            showDatePicker();
            setDateModal(true);
            console.log('open modal');
          }}
          // style={{backgroundColor: 'red', width: '100%'}}
        >
          <Input
            placeholder={'Date of Birth'}
            onChangeText={text => {
              setDob(text);
              setErr({...err, messege: ''});
              setDateValue(text);
            }}
            value={dateValue}
            editable={false}
          />
        </TouchableOpacity>

        <View style={styles.heightWeight}>
          <View style={{marginRight: 10}}>
            <Text
              style={{
                ...FONT.subTitle,
                alignSelf: 'flex-start',
                marginTop: 20,
                marginBottom: 5,
                width: '100%',
                marginLeft: 5,
              }}>
              Height <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              width={DIMENSIONS.width / 2 - 40}
              keyboardType={'numeric'}
              placeholder={'Enter height'}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                ...FONT.subTitle,
                alignSelf: 'flex-start',
                marginTop: 20,
                marginBottom: 5,
                width: '100%',
                marginLeft: 5,
              }}>
              Weight <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              width={DIMENSIONS.width / 2 - 40}
              keyboardType={'numeric'}
              placeholder={'Enter weight'}
            />
          </View>
        </View>

        <Text
          style={{
            ...FONT.subTitle,
            ...styles.placeholderText,
            marginLeft: 60,
          }}>
          Gender <Text style={{color: COLORS.error}}>*</Text>
        </Text>

        <View style={styles.wrapperButton}>
          {['Male', 'Female'].map(gender => {
            return (
              <View
                key={gender}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 20,
                }}>
                <Text
                  style={{
                    ...styles.radioText,
                    ...FONT.title,
                  }}>
                  {gender}
                </Text>
                <TouchableOpacity
                  style={styles.outerButton}
                  onPress={() => {
                    setRadioGender(gender);
                  }}>
                  {radioGender == gender && <View style={styles.innerButton} />}
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
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
          <Text style={styles.googleText}>Signin with Google</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* <DateTimePickerModal
        isVisible={datemodal}
        mode="date"
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      /> */}
      <DateTimePicker
        isVisible={datemodal}
        mode="date"
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
  signUpTopTab: {
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
  userButton: {
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
  outerButton: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
  },
  innerButton: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.blue,
  },
  wrapperButton: {
    flexDirection: 'row',
    width: DIMENSIONS.width - 40,
  },
  radioText: {
    marginRight: 5,
    top: 2,
    color: 'grey',
  },
  heightWeight: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
