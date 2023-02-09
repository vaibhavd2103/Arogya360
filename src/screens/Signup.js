import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
//-------------------------------- import packages--------------------------------------
import DateTimePicker from 'react-native-modal-datetime-picker';
import {CheckIcon, Select, Actionsheet} from 'native-base';

//------------------import components and constants-----------------------------------------
import Container from '../components/Container';
import Input from '../components/TextInput';
import {Button} from '../components/Buttons';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {ROUTES} from '../constants/constants';
import DropDown from '../components/DropDown';
import {COUNTRY_API_KEY} from '../../config';

//---------------------import icons---------------------------------------------------
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Signup = ({navigation}) => {
  //-----------------------------------------useState---------------------------------
  const [user, setUser] = useState('patient');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [radioGender, setRadioGender] = useState('');
  const [datemodal, setDateModal] = useState(false);
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [secure, setSecure] = useState(true);
  const [errors, setErrors] = useState({
    message: '',
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    date: '',
    country: '',
    state: '',
    city: '',
    height: '',
    weight: '',
    gender: '',
  });
  const [countrySheet, setCountrySheet] = useState(false);
  const [countries, setCountries] = useState([]);
  const [stateSheet, setStateSheet] = useState(false);
  const [states, setStates] = useState([]);
  const [citySheet, setCitySheet] = useState(false);
  const [cities, setCities] = useState([]);
  const [gender, setGender] = useState('');
  const [genderSheet, setGenderSheet] = useState([]);

  //-------------------------------useRef---------------------------------------------

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const passwordRef = useRef(null);
  const dateRef = useRef(null);
  const countryRef = useRef(null);
  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const genderRef = useRef(null);

  //---------------------------------------API------------------------------------------

  const getCountry = async () => {
    const config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': COUNTRY_API_KEY,
      },
    };
    await axios(config)
      .then(res => {
        // console.log(res?.data);
        setCountries(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getState = async data => {
    const config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${data}/states`,
      headers: {
        'X-CSCAPI-KEY': COUNTRY_API_KEY,
      },
    };
    await axios(config)
      .then(res => {
        console.log(res?.data);
        setStates(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getCity = async data => {
    const config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${country?.iso2}/states/${data}/cities`,
      headers: {
        'X-CSCAPI-KEY': COUNTRY_API_KEY,
      },
    };
    await axios(config)
      .then(res => {
        console.log(res?.data);
        setCities(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  //-----------------------------useEffect----------------------------------------------
  useEffect(() => {
    getCountry();
  }, []);

  //--------------------------------------functions-------------------------------------

  const signup = () => {
    if (fullName == '') {
      setErrors({...errors, fullName: 'Enter full name'});
      fullNameRef?.current?.focus();
    } else if (email == '') {
      setErrors({...errors, email: 'Enter email'});
      emailRef?.current?.focus();
    } else if (mobileNumber == '') {
      setErrors({...errors, mobileNumber: 'Enter mobile number'});
      mobileNumberRef?.current?.focus();
    } else if (password == '') {
      setErrors({...errors, password: 'Enter password'});
      passwordRef?.current?.focus();
    } else if (date == '') {
      setErrors({...errors, date: 'Enter date'});
      dateRef?.current?.focus();
    } else if (country == '') {
      setErrors({...errors, country: 'Enter country'});
      countryRef?.current?.focus();
    } else if (state == '') {
      setErrors({...errors, state: 'Enter state'});
      stateRef?.current?.focus();
    } else if (city == '') {
      setErrors({...errors, city: 'Enter city'});
      cityRef?.current?.focus();
    }
    // else if (height == '') {
    //   setErrors({...errors, height: 'Enter height'});
    //   heightRef?.current?.focus();
    // } else if (weight == '') {
    //   setErrors({...errors, weight: 'Enter weight'});
    //   weightRef?.current?.focus();
    // }
    else if (gender == '') {
      setErrors({...errors, gender: 'Enter gender'});
      genderRef?.current?.focus();
    } else {
      setErrors({
        ...errors,
        message: '',
        fullName: '',
        email: '',
        mobileNumber: '',
        password: '',
        date: '',
        country: '',
        state: '',
        city: '',
        height: '',
        weight: '',
        gender: '',
      });
    }
  };
  //-----------------------------dateTime picker-----------------------------------------
  const FormatDate = data => {
    let dateTimeString =
      data.getFullYear() +
      '/' +
      ('0' + (data.getMonth() + 1)).slice(-2) +
      '/' +
      ('0' + data.getDate()).slice(-2);

    return dateTimeString;
  };

  const handleConfirm = data => {
    setDate(FormatDate(data));
    // saveDetails(FormatDate(data), dateIndex);
    console.log(FormatDate(data));
    // setDateValue(FormatDate(data));
    setDateModal(false);
    setErrors({...errors, date: ''});
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
      {/*---------------------------------topTab------------------------------------------------- */}
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
            elevation: 20,
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
            elevation: 20,
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

      {/* ----------------------------Input-------------------------------------------- */}
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        style={styles.scrollView}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* ------------------------------------DOCTOR----------------------------------- */}
        {user == 'doctor' ? (
          <View style={{width: '100%', alignItems: 'center'}}>
            {/* ---------------------------------------------------------------------------- */}
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Full Name <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              placeholder={'Full Name'}
              onChangeText={text => {
                setFullName(text);
                setErrors({...errors, fullName: ''});
              }}
              value={fullName}
              props={{
                ref: fullNameRef,
              }}
              err={errors.fullName}
            />
            {errors?.fullName && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.fullName}
              </Text>
            )}
            {/* ------------------------------------------------------------------------------- */}
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Email <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              placeholder={'Email'}
              onChangeText={text => {
                setEmail(text);
                setErrors({...errors, email: ''});
              }}
              value={email}
              props={{
                ref: emailRef,
              }}
              err={errors.email}
            />
            {errors?.email && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.email}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Mobile Number <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              placeholder={'Mobile Number'}
              onChangeText={text => {
                setMobileNumber(text);
                setErrors({...errors, mobileNumber: ''});
              }}
              value={mobileNumber}
              keyboardType="numeric"
              props={{
                ref: mobileNumberRef,
              }}
              err={errors.mobileNumber}
            />
            {errors?.mobileNumber && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.mobileNumber}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Password <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <View
              style={{
                // width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Input
                placeholder={'Password'}
                secureTextEntry={secure}
                onChangeText={text => {
                  setPassword(text);
                  setErrors({...errors, password: ''});
                }}
                value={password}
                props={{
                  ref: passwordRef,
                }}
                err={errors.password}
              />
              <Entypo
                name={secure ? 'eye-with-line' : 'eye'}
                size={20}
                color="grey"
                onPress={() => setSecure(!secure)}
                style={{right: 10, position: 'absolute', padding: 10}}
              />
            </View>
            {errors?.password && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.password}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Date of Birth <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  // showDatePicker();
                  setDateModal(true);
                  console.log('open modal');
                }}>
                <Input
                  placeholder={'Date of Birth'}
                  value={date}
                  editable={false}
                  props={{
                    ref: dateRef,
                  }}
                  err={errors.date}
                />
                {errors?.date && (
                  <Text
                    style={{
                      ...FONT.subTitle,
                      color: COLORS.error,
                      textAlign: 'left',
                      marginTop: 5,
                      width: DIMENSIONS.width - 60,
                    }}>
                    {errors.date}
                  </Text>
                )}
              </TouchableOpacity>
              <FontAwesome5
                name="calendar-alt"
                size={20}
                color="grey"
                style={{position: 'absolute', right: 20}}
              />
            </View>
            {/* --------------------------------------------------------------------------------------- */}

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Country <Text style={{color: COLORS.error}}>*</Text>
            </Text>

            <DropDown
              onPress={() => {
                setCountrySheet(true);
              }}
              value={country?.name}
              placeholder={'Choose country'}
              err={errors?.country}
            />

            {errors?.country && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.country}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              State <Text style={{color: COLORS.error}}>*</Text>
            </Text>

            <DropDown
              onPress={() => {
                setStateSheet(true);
              }}
              value={state?.name}
              placeholder={'Choose state'}
              err={errors?.state}
            />

            {errors?.state && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.state}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              City <Text style={{color: COLORS.error}}>*</Text>
            </Text>

            <DropDown
              onPress={() => {
                setCitySheet(true);
              }}
              value={city?.name}
              placeholder={'Choose city'}
              err={errors?.city}
            />

            {errors?.city && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.city}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}

            {/* <View style={styles.heightWeight}>
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
                  Height
                </Text>
                <Input
                  width={DIMENSIONS.width / 2 - 40}
                  keyboardType={'numeric'}
                  placeholder={'Enter height'}
                  onChangeText={text => {
                    setHeight(text);
                  }}
                  value={height}
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
                  Weight
                </Text>
                <Input
                  width={DIMENSIONS.width / 2 - 40}
                  keyboardType={'numeric'}
                  placeholder={'Enter weight'}
                  onChangeText={text => {
                    setWeight(text);
                  }}
                  value={weight}
                />
              </View>
            </View> */}

            {/* --------------------------------------------------------------------------------------- */}

            <Text
              style={{
                ...FONT.subTitle,
                ...styles.placeholderText,
                // marginLeft: 60,
              }}>
              Gender <Text style={{color: COLORS.error}}>*</Text>
            </Text>

            {/* <View style={styles.wrapperButton}>
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
                      {radioGender == gender && (
                        <View style={styles.innerButton} />
                      )}
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            {errors?.gender && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.gender}
              </Text>
            )} */}
            <DropDown
              onPress={() => {
                setGenderSheet(true);
              }}
              value={gender}
              placeholder={'Select gender'}
              err={errors?.gender}
            />
            {errors?.gender && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.gender}
              </Text>
            )}
          </View>
        ) : (
          // ----------------------------------------------PATIENT------------------------------------------------
          // <View style={{width: '100%', alignItems: 'center'}}>
          //   <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          //     Full Name <Text style={{color: COLORS.error}}>*</Text>
          //   </Text>
          //   <Input
          //     placeholder={'Full Name'}
          //     onChangeText={text => {
          //       setFullName(text);
          //       setErrors({...errors, message: ''});
          //     }}
          //     value={fullName}
          //   />
          //   <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          //     Email <Text style={{color: COLORS.error}}>*</Text>
          //   </Text>
          //   <Input
          //     placeholder={'Email'}
          //     onChangeText={text => {
          //       setEmail(text);
          //       setErrors({...errors, message: ''});
          //     }}
          //     value={email}
          //   />
          //   <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          //     Mobile Number <Text style={{color: COLORS.error}}>*</Text>
          //   </Text>
          //   <Input
          //     placeholder={'Mobile Number'}
          //     onChangeText={text => {
          //       setMobileNumber(text);
          //       setErrors({...errors, message: ''});
          //     }}
          //     value={mobileNumber}
          //     keyboardType="numeric"
          //   />
          //   <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          //     Password <Text style={{color: COLORS.error}}>*</Text>
          //   </Text>
          //   <Input
          //     placeholder={'Password'}
          //     onChangeText={text => {
          //       setPassword(text);
          //       setErrors({...errors, message: ''});
          //     }}
          //     value={password}
          //   />
          //   <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
          //     Date of Birth <Text style={{color: COLORS.error}}>*</Text>
          //   </Text>

          //   <TouchableOpacity
          //     activeOpacity={0.7}
          //     onPress={() => {
          //       setDateModal(true);
          //       console.log('open modal');
          //     }}>
          //     <Input
          //       placeholder={'Date of Birth'}
          //       value={date}
          //       editable={false}
          //     />
          //   </TouchableOpacity>

          //   <View style={styles.heightWeight}>
          //     <View style={{marginRight: 10}}>
          //       <Text
          //         style={{
          //           ...FONT.subTitle,
          //           ...styles.heightWeightText,
          //         }}>
          //         Height <Text style={{color: COLORS.error}}>*</Text>
          //       </Text>
          //       <Input
          //         width={DIMENSIONS.width / 2 - 40}
          //         keyboardType={'numeric'}
          //         placeholder={'Enter height'}
          //       />
          //     </View>
          //     <View style={{marginLeft: 10}}>
          //       <Text
          //         style={{
          //           ...FONT.subTitle,
          //           ...styles.heightWeightText,
          //         }}>
          //         Weight <Text style={{color: COLORS.error}}>*</Text>
          //       </Text>
          //       <Input
          //         width={DIMENSIONS.width / 2 - 40}
          //         keyboardType={'numeric'}
          //         placeholder={'Enter weight'}
          //       />
          //     </View>
          //   </View>

          //   <Text
          //     style={{
          //       ...FONT.subTitle,
          //       ...styles.placeholderText,
          //     }}>
          //     Gender <Text style={{color: COLORS.error}}>*</Text>
          //   </Text>

          //   <View style={styles.wrapperButton}>
          //     {['Male', 'Female'].map(gender => {
          //       return (
          //         <View
          //           key={gender}
          //           style={{
          //             flexDirection: 'row',
          //             alignItems: 'center',
          //             marginLeft: 20,
          //           }}>
          //           <Text
          //             style={{
          //               ...styles.radioText,
          //               ...FONT.title,
          //             }}>
          //             {gender}
          //           </Text>
          //           <TouchableOpacity
          //             style={styles.outerButton}
          //             onPress={() => {
          //               setRadioGender(gender);
          //             }}>
          //             {radioGender == gender && (
          //               <View style={styles.innerButton} />
          //             )}
          //           </TouchableOpacity>
          //         </View>
          //       );
          //     })}
          //   </View>
          // </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            {/* ---------------------------------------------------------------------------- */}
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Full Name <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              placeholder={'Full Name'}
              onChangeText={text => {
                setFullName(text);
                setErrors({...errors, fullName: ''});
              }}
              value={fullName}
              props={{
                ref: fullNameRef,
              }}
              err={errors.fullName}
            />
            {errors?.fullName && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.fullName}
              </Text>
            )}
            {/* ------------------------------------------------------------------------------- */}
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Email <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              placeholder={'Email'}
              onChangeText={text => {
                setEmail(text);
                setErrors({...errors, email: ''});
              }}
              value={email}
              props={{
                ref: emailRef,
              }}
              err={errors.email}
            />
            {errors?.email && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.email}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Mobile Number <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              placeholder={'Mobile Number'}
              onChangeText={text => {
                setMobileNumber(text);
                setErrors({...errors, mobileNumber: ''});
              }}
              value={mobileNumber}
              keyboardType="numeric"
              props={{
                ref: mobileNumberRef,
              }}
              err={errors.mobileNumber}
            />
            {errors?.mobileNumber && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.mobileNumber}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Password <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <View
              style={{
                // width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Input
                placeholder={'Password'}
                secureTextEntry={secure}
                onChangeText={text => {
                  setPassword(text);
                  setErrors({...errors, password: ''});
                }}
                value={password}
                props={{
                  ref: passwordRef,
                }}
                err={errors.password}
              />
              <Entypo
                name={secure ? 'eye-with-line' : 'eye'}
                size={20}
                color="grey"
                onPress={() => setSecure(!secure)}
                style={{right: 10, position: 'absolute', padding: 10}}
              />
            </View>
            {errors?.password && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.password}
              </Text>
            )}
            {/* --------------------------------------------------------------------------------------- */}

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Date of Birth <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  // showDatePicker();
                  setDateModal(true);
                  console.log('open modal');
                }}>
                <Input
                  placeholder={'Date of Birth'}
                  value={date}
                  editable={false}
                  props={{
                    ref: dateRef,
                  }}
                  err={errors.date}
                />
                {errors?.date && (
                  <Text
                    style={{
                      ...FONT.subTitle,
                      color: COLORS.error,
                      textAlign: 'left',
                      marginTop: 5,
                      width: DIMENSIONS.width - 60,
                    }}>
                    {errors.date}
                  </Text>
                )}
              </TouchableOpacity>
              <FontAwesome5
                name="calendar-alt"
                size={20}
                color="grey"
                style={{position: 'absolute', right: 20}}
              />
            </View>
            {/* --------------------------------------------------------------------------------------- */}

            <Text
              style={{
                ...FONT.subTitle,
                ...styles.placeholderText,
                // marginLeft: 60,
              }}>
              Gender <Text style={{color: COLORS.error}}>*</Text>
            </Text>

            <DropDown
              onPress={() => {
                setGenderSheet(true);
              }}
              value={gender}
              placeholder={'Select gender'}
              err={errors?.gender}
            />
            {errors?.gender && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.gender}
              </Text>
            )}
          </View>
        )}
        <Button
          title="Register"
          style={{width: DIMENSIONS.width - 50, marginTop: 50}}
          onPress={() => {
            signup();
          }}
        />
        <View style={styles.signInView}>
          <Text style={{...FONT.subTitle}}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.login);
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

      {/* ---------------------------------------------DateTimePicker-------------------------------------- */}
      <DateTimePicker
        isVisible={datemodal}
        mode="date"
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={() => setDateModal(false)}
      />
      {/* ---------------------------------------------------ActionSheet----------------------------------------------- */}
      <Actionsheet isOpen={countrySheet} onClose={() => setCountrySheet(false)}>
        <Actionsheet.Content>
          <FlatList
            data={countries}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setCountry(item);
                    setCountrySheet(false);
                    setErrors({...errors, country: ''});
                    setState('');
                    setCity('');
                    getState(item?.iso2);
                  }}>
                  <Text>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Actionsheet.Content>
      </Actionsheet>

      <Actionsheet isOpen={stateSheet} onClose={() => setStateSheet(false)}>
        <Actionsheet.Content>
          <FlatList
            data={states}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setState(item);
                    setStateSheet(false);
                    setErrors({...errors, state: ''});
                    setCity('');
                    getCity(item?.iso2);
                  }}>
                  <Text>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Actionsheet.Content>
      </Actionsheet>

      <Actionsheet isOpen={citySheet} onClose={() => setCitySheet(false)}>
        <Actionsheet.Content>
          <FlatList
            data={cities}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setCity(item);
                    setCitySheet(false);
                    setErrors({...errors, city: ''});
                  }}>
                  <Text>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Actionsheet.Content>
      </Actionsheet>

      <Actionsheet isOpen={genderSheet} onClose={() => setGenderSheet(false)}>
        <Actionsheet.Content>
          {/* <FlatList
            data={cities}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setCity(item);
                    setCitySheet(false);
                    setErrors({...errors, city: ''});
                  }}>
                  <Text>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          /> */}
          {['Male', 'Female', 'Other'].map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setGenderSheet(false);
                  setGender(item);
                  setErrors({...errors, gender: ''});
                }}
                key={item}>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </Actionsheet.Content>
      </Actionsheet>
    </Container>
  );
};

export default Signup;

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
    paddingBottom: 70,
  },
  signupContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    width: DIMENSIONS.width - 60,
  },
  userButton: {
    padding: 10,
    width: '50%',
    borderRadius: 10,
    alignItems: 'center',
  },
  placeholderText: {
    width: DIMENSIONS?.width - 60,
    marginTop: 20,
    marginBottom: 5,
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
  SelectedStyle: {
    height: 50,
    width: DIMENSIONS.width - 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
    borderWidth: 0,
    borderColor: COLORS.error,
    ...FONT.title,
    elevation: 0,
    shadowColor: `${COLORS.blue}cc`,
  },
  heightWeightText: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 5,
    width: '100%',
    marginLeft: 5,
  },
});
