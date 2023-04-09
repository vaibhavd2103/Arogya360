import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import axios from 'axios';
import {setAuthenticated, setUserType} from '../redux/actions';
import {useDispatch} from 'react-redux';
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
import {qualifications, specialities} from '../constants/data';

//---------------------import icons---------------------------------------------------
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
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
  const [qualification, setQualification] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [mci, setMci] = useState('');
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
    mci: '',
  });
  const [countrySheet, setCountrySheet] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [stateSheet, setStateSheet] = useState(false);
  const [states, setStates] = useState([]);
  const [filteredStates, setFilteredStates] = useState([]);
  const [citySheet, setCitySheet] = useState(false);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [genderSheet, setGenderSheet] = useState(false);
  const [gender, setGender] = useState('');
  const [qualificationSheet, setQualificationSheet] = useState(false);
  const [qualificationsList, setQualificationsList] = useState(qualifications);
  const [filteredQualificationsList, setFilteredQualificationsList] =
    useState(qualifications);
  const [specialitiesList, setspecialitiesList] = useState(specialities);
  const [specialitySheet, setSpecialitySheet] = useState(false);
  const [filteredSpecialities, setFilteredSpecialities] =
    useState(specialities);

  //-------------------------------useRef---------------------------------------------

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const passwordRef = useRef(null);
  const dateRef = useRef(null);
  const countryRef = useRef(null);
  const stateRef = useRef(null);
  const cityRef = useRef(null);
  const genderRef = useRef(null);
  const qualificationRef = useRef(null);
  const specialityRef = useRef(null);
  const mciRef = useRef(null);

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
        setCountries(res?.data);
        setFilteredCountries(res?.data);
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
        setStates(res?.data);
        setFilteredStates(res?.data);
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
        setCities(res?.data);
        setFilteredCities(res?.data);
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
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (user == 'doctor') {
      if (fullName == '') {
        setErrors({...errors, fullName: 'Enter full name'});
        fullNameRef?.current?.focus();
      } else if (email == '') {
        setErrors({...errors, email: 'Enter email'});
        emailRef?.current?.focus();
      } else if (!emailRegex.test(email)) {
        setErrors({...errors, email: 'Enter valid email id'});
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
      } else if (qualification == '') {
        setErrors({...errors, qualification: 'Enter qualification'});
        qualificationRef?.current?.focus();
      } else if (speciality == '') {
        setErrors({...errors, speciality: 'Enter speciality'});
        specialityRef?.current?.focus();
      } else if (mci == '') {
        setErrors({...errors, mci: 'Enter MCI Registration Number'});
        mciRef?.current?.focus();
      } else if (gender == '') {
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
          qualification: '',
          speciality: '',
          gender: '',
        });
        dispatch(setAuthenticated(true));
      }
    } else {
      if (fullName == '') {
        setErrors({...errors, fullName: 'Enter full name'});
        fullNameRef?.current?.focus();
      } else if (email == '') {
        setErrors({...errors, email: 'Enter email'});
        emailRef?.current?.focus();
      } else if (!emailRegex.test(email)) {
        setErrors({...errors, email: 'Enter valid email id'});
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
      } else if (gender == '') {
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
        dispatch(setAuthenticated(true));
      }
    }
  };

  const [searchTerm, setSearchTerm] = useState('');
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
        }}>
        <TouchableOpacity
          onPress={() => {
            dispatch(setUserType(1));
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
            dispatch(setUserType(2));
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

      {/* ------------------------------------------------------------------------------------ */}
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
            {/* --------------------------------doctor full name-------------------------------------------- */}
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
            {/* ---------------------------------dotor email---------------------------------------------- */}
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
            {/* --------------------------------doctor mobile number------------------------------------------------------- */}
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
            {/* ------------------------------------dotor password--------------------------------------------------- */}

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
            {/* --------------------------------------doctor dob------------------------------------------------- */}

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
                  // console.log('open modal');
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
            {/* --------------------------------------doctor country------------------------------------------------- */}

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
            <Actionsheet
              hideDragIndicator
              isOpen={countrySheet}
              onClose={() => {
                setSearchTerm('');
                setFilteredCountries(countries);
                setCountrySheet(false);
              }}>
              <Actionsheet.Content h={DIMENSIONS.height - 200}>
                <View style={{height: 20}} />
                <Input
                  placeholder={'Search country name'}
                  onChangeText={text => {
                    if (text) {
                      const newData = countries?.filter(item => {
                        const itemData = item?.name
                          ? item?.name?.toUpperCase()
                          : ''.toUpperCase();
                        const textData = text?.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                      });
                      setFilteredCountries(newData);
                      setSearchTerm(text);
                    }
                  }}
                />
                <View style={{height: 20}} />
                <FlatList
                  data={filteredCountries}
                  keyExtractor={item => item?.id}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={{
                          width: DIMENSIONS?.width - 60,
                          padding: 8,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                        onPress={() => {
                          setCountry(item);
                          setCountrySheet(false);
                          setErrors({...errors, country: ''});
                          setState('');
                          setCity('');
                          getState(item?.iso2);
                        }}>
                        <Text style={{...FONT?.title}}>{item?.name}</Text>
                        <Text style={{...FONT?.title}}>{item?.iso2}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </Actionsheet.Content>
            </Actionsheet>
            {/* -------------------------------------doctor state-------------------------------------------------- */}

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
            <Actionsheet
              isOpen={stateSheet}
              onClose={() => {
                setStateSheet(false);
                setFilteredStates(states);
                setSearchTerm('');
              }}>
              <Actionsheet.Content h={DIMENSIONS.height - 200}>
                <View style={{height: 20}} />
                <Input
                  placeholder={'Search state name'}
                  onChangeText={text => {
                    if (text) {
                      const newData = states?.filter(item => {
                        const itemData = item?.name
                          ? item?.name?.toUpperCase()
                          : ''.toUpperCase();
                        const textData = text?.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                      });
                      setFilteredStates(newData);
                      setSearchTerm(text);
                    }
                  }}
                />
                <View style={{height: 20}} />
                <FlatList
                  data={filteredStates}
                  keyExtractor={item => item?.id}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={{width: DIMENSIONS?.width - 40, padding: 5}}
                        onPress={() => {
                          setState(item);
                          setStateSheet(false);
                          setErrors({...errors, state: ''});
                          setCity('');
                          getCity(item?.iso2);
                        }}>
                        <Text style={{...FONT?.title}}>{item?.name}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </Actionsheet.Content>
            </Actionsheet>
            {/* ------------------------------------doctor city--------------------------------------------------- */}

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
            <Actionsheet
              isOpen={citySheet}
              onClose={() => {
                setCitySheet(false);
                setFilteredCities(cities);
                setSearchTerm('');
              }}>
              <Actionsheet.Content h={DIMENSIONS.height - 200}>
                <View style={{height: 20}} />
                <Input
                  placeholder={'Search city name'}
                  onChangeText={text => {
                    if (text) {
                      const newData = cities?.filter(item => {
                        const itemData = item?.name
                          ? item?.name?.toUpperCase()
                          : ''.toUpperCase();
                        const textData = text?.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                      });
                      setFilteredCities(newData);
                      setSearchTerm(text);
                    }
                  }}
                />
                <View style={{height: 20}} />
                <FlatList
                  data={filteredCities}
                  keyExtractor={item => item?.id}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={{width: DIMENSIONS?.width - 40, padding: 5}}
                        onPress={() => {
                          setCity(item);
                          setCitySheet(false);
                          setErrors({...errors, city: ''});
                        }}>
                        <Text style={{...FONT?.title}}>{item?.name}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </Actionsheet.Content>
            </Actionsheet>
            {/* --------------------------------------doctor qualification------------------------------------------------- */}
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Qualification <Text style={{color: COLORS.error}}>*</Text>
            </Text>

            <DropDown
              onPress={() => {
                setQualificationSheet(true);
              }}
              value={qualification}
              placeholder={'Select qualification'}
              err={errors?.qualification}
            />

            {errors?.qualification && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.qualification}
              </Text>
            )}
            <Actionsheet
              isOpen={qualificationSheet}
              onClose={() => {
                setQualificationSheet(false);
                setFilteredQualificationsList(qualifications);
                setSearchTerm('');
              }}>
              <Actionsheet.Content h={DIMENSIONS.height - 200}>
                <View style={{height: 20}} />
                <Input
                  placeholder={'Search qualification'}
                  onChangeText={text => {
                    if (text) {
                      const newData = qualificationsList?.filter(item => {
                        const itemData = item
                          ? item?.toUpperCase()
                          : ''.toUpperCase();
                        const textData = text?.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                      });
                      setFilteredQualificationsList(newData);
                      setSearchTerm(text);
                    }
                  }}
                />
                <View style={{height: 20}} />
                <FlatList
                  data={filteredQualificationsList}
                  keyExtractor={item => item}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={{width: DIMENSIONS?.width - 40, padding: 5}}
                        onPress={() => {
                          setQualification(item);
                          setQualificationSheet(false);
                          setErrors({...errors, qualification: ''});
                        }}>
                        <Text style={{...FONT?.title}}>{item}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </Actionsheet.Content>
            </Actionsheet>
            {/* ------------------------------------------doctor speciality--------------------------------------------- */}
            <Text
              style={{
                ...FONT.subTitle,
                ...styles.placeholderText,
                // marginLeft: 60,
              }}>
              Speciality <Text style={{color: COLORS.error}}>*</Text>
            </Text>

            <DropDown
              onPress={() => {
                setSpecialitySheet(true);
              }}
              value={speciality}
              placeholder={'Select speciality'}
              err={errors?.speciality}
            />
            {errors?.speciality && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.speciality}
              </Text>
            )}
            <Actionsheet
              isOpen={specialitySheet}
              onClose={() => {
                setSpecialitySheet(false);
                setFilteredSpecialities(specialities);
                setSearchTerm('');
              }}>
              <Actionsheet.Content h={DIMENSIONS.height - 200}>
                <View style={{height: 20}} />
                <Input
                  placeholder={'Search specialty'}
                  onChangeText={text => {
                    if (text) {
                      const newData = specialitiesList?.filter(item => {
                        const itemData = item
                          ? item?.toUpperCase()
                          : ''.toUpperCase();
                        const textData = text?.toUpperCase();
                        return itemData.indexOf(textData) > -1;
                      });
                      setFilteredSpecialities(newData);
                      setSearchTerm(text);
                    }
                  }}
                />
                <View style={{height: 20}} />
                <FlatList
                  data={filteredSpecialities}
                  keyExtractor={item => item}
                  renderItem={({item, index}) => {
                    return (
                      <TouchableOpacity
                        style={{width: DIMENSIONS?.width - 40, padding: 5}}
                        onPress={() => {
                          setSpeciality(item);
                          setSpecialitySheet(false);
                          setErrors({...errors, speciality: ''});
                        }}>
                        <Text style={{...FONT?.title}}>{item}</Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </Actionsheet.Content>
            </Actionsheet>
            {/* ------------------------------------------doctor Mci--------------------------------------------- */}
            <Text
              style={{
                ...FONT.subTitle,
                ...styles.placeholderText,
                // marginLeft: 60,
              }}>
              MCI Registration Number{' '}
              <Text style={{color: COLORS.error}}>*</Text>
            </Text>
            <Input
              placeholder={'MCI Registration Number'}
              onChangeText={text => {
                setMci(text);
                setErrors({...errors, mci: ''});
              }}
              value={mci}
              props={{
                ref: mciRef,
              }}
              keyboardType="numeric"
              err={errors.mci}
            />
            {errors?.mci && (
              <Text
                style={{
                  ...FONT.subTitle,
                  color: COLORS.error,
                  textAlign: 'left',
                  marginTop: 5,
                  width: DIMENSIONS.width - 60,
                }}>
                {errors.mci}
              </Text>
            )}
            {/* ------------------------------------------doctor gender--------------------------------------------- */}

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
                console.log('open gener');
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
            <Actionsheet
              isOpen={genderSheet}
              onClose={() => setGenderSheet(false)}>
              <Actionsheet.Content>
                {['Male', 'Female', 'Other'].map(item => {
                  return (
                    <TouchableOpacity
                      style={{width: DIMENSIONS?.width - 40, padding: 5}}
                      onPress={() => {
                        setGenderSheet(false);
                        setGender(item);
                        setErrors({...errors, gender: ''});
                      }}
                      key={item}>
                      <Text style={{...FONT?.title}}>{item}</Text>
                    </TouchableOpacity>
                  );
                })}
              </Actionsheet.Content>
            </Actionsheet>
          </View>
        ) : (
          // ----------------------------------------------PATIENT------------------------------------------------

          <View style={{width: '100%', alignItems: 'center'}}>
            {/* ---------------------------------patient full name------------------------------------------- */}
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
            {/* -------------------------------patient email------------------------------------------------ */}
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
            {/* ----------------------------patient mobile number----------------------------------------------------------- */}
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
            {/* ----------------------------patient password----------------------------------------------------------- */}

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
            {/* ----------------------------patient dob----------------------------------------------------------- */}

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
                  setDateModal(true);
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

            {/* -----------------------------------patient height---------------------------------------------------- */}
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
            </View>
            {/* -----------------------------------patient gender---------------------------------------------------- */}

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
            <Text style={{...FONT.header, fontSize: 14, bottom: 3}}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ---------------------------------------------DateTimePicker-------------------------------------- */}
      <DateTimePicker
        isVisible={datemodal}
        mode="date"
        maximumDate={new Date()}
        onConfirm={handleConfirm}
        onCancel={() => setDateModal(false)}
      />

      <KeyboardAvoidingView />
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
    marginBottom: 30,
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

  heightWeight: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
