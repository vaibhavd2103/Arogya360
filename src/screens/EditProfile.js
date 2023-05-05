import {
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Container from '../components/Container';
import {NormalInput} from '../components/TextInput';
import Input from '../components/TextInput';
import {Button, RoundedButton} from '../components/Buttons';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {AVATAR_KEY, COUNTRY_API_KEY} from '../../config';
import {Actionsheet} from 'native-base';
import {qualifications} from '../constants/data';
import DropDown from '../components/DropDown';
import {useDispatch, useSelector} from 'react-redux';
import API from '../axios/api';
import {setUserData as reduxUserData} from './../redux/actions';
import storage from '@react-native-firebase/storage';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);
  const user = useSelector(state => state?.user);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [userData, setUserData] = useState({
    name: user?.name,
    email: user?.email,
    mobile: user?.mobile,
    height: user?.height,
    weight: user?.weight,
    birthDate: user?.dob,
    gender: user?.gender,
    bloodGroup: user?.bloodGroup,
    avatar_url: user?.avatar_url,
  });

  const [err, setErr] = useState({
    name: '',

    email: '',
    height: '',
    weight: '',
    mobile: '',
    birthDate: '',
    gender: '',
    bloodGroup: '',
  });

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = {
        //   uri: 'data:image/jpeg;base64,' + response.data
        // };
        console.log(source?.assets[0]?.uri);
        // setFilePath(source);
        setImage(source?.assets[0]?.uri);
        // setImage(source?.assets[0]);
        uploadImage(source?.assets[0]);
      }
    });
    const uploadImage = async image => {
      const {uri} = image;
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
      const uploadUri =
        Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
      // setUploading(true);
      // setTransferred(0);
      const task = storage().ref(filename).putFile(uploadUri);
      // set progress state
      task.on('state_changed', snapshot => {
        // setTransferred(
        //   Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
        // );
      });
      try {
        await task;
      } catch (e) {
        console.error(e);
      }
      // setUploading(false);
      Alert.alert(
        'Photo uploaded!',
        'Your photo has been uploaded to Firebase Cloud Storage!',
      );
      setImage(null);
    };
  };

  ////////////////////////////////////DOctors SIDE USESTATES
  const [docData, setDocData] = useState({
    name: '',
    email: '',
    height: '',
    weight: '',
    mobile: '',
    birthDate: '',
    country: '',
    state: '',
    city: '',
    qualification: '',
    expertise: '',
    gender: '',
    img: '',
  });
  const [countrySheet, setCountrySheet] = useState(false);
  const [countries, setCountries] = useState([]);
  const [stateSheet, setStateSheet] = useState(false);
  const [states, setStates] = useState([]);
  const [citySheet, setCitySheet] = useState(false);
  const [cities, setCities] = useState([]);
  const [gender, setGender] = useState('');
  const [genderSheet, setGenderSheet] = useState(false);
  const [qualificationSheet, setQualificationSheet] = useState(false);
  const [qualification, setQualification] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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
        // console.log(res?.data);
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
        //console.log(res?.data);
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

  // const fetchUser = async () => {
  //   await API.getUserDetails(userId, userType)
  //     .then(res => {
  //       // console.log('MY details fetched', res.data);
  //       // setProfileData(res?.data?.user);
  //       dispatch(reduxUserData(res?.data?.user));
  //       // dispatch(setUserId(res?.data?.userId));
  //     })
  //     .catch(error => {
  //       console.error(
  //         'Error fetching user',
  //         error?.response?.data?.status_message ?? error?.message,
  //       );
  //     });
  // };

  const edit_Profile = async () => {
    setLoading(true);
    const patientData = {
      userId: userId,
      userType: userType,
      mobile: userData?.mobile,
      // avatar_url: ,
      height: userData?.height,
      weight: userData?.weight,
      bloodGroup: userData?.bloodGroup,
    };

    const doctorData = {
      userId: userId,
      userType: userType,
      mobile: docData?.mobile,
      //  avatar_url: avatar_url,
      country: docData?.country,
      state: docData?.state,
      city: docData?.city,
    };

    let data = userType == 1 ? patientData : doctorData;

    await API.editProfile(data)
      .then(res => {
        // console.log(res?.data);
        dispatch(reduxUserData(res?.data?.response));
        // fetchUser();
        setLoading(false);
        navigation?.goBack();
        //  setAllUser(res?.data);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <Container>
      <ScrollView
        style={{
          // backgroundColor: Colors.yellow,
          width: '100%',
          height: '100%',
        }}
        contentContainerStyle={{
          //   backgroundColor: 'grey',
          //   height: DIMENSIONS.height > 700 ? '100%' : null,
          padding: 24,
        }}>
        {userType == 2 ? (
          <>
            <View
              style={{
                backgroundColor: COLORS.background,
                alignItems: 'center',
              }}>
              <Image
                source={{
                  // uri: image
                  //   ? image
                  //   : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
                  uri: image
                    ? image
                    : `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${docData?.name}&background_color=003467&is_bold=true`,
                }}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 21,
                  borderWidth: 2,
                  borderColor: COLORS.blue,
                  // margin: 20,
                  // position: 'absolute',
                  // top: 70,
                }}
              />
              <RoundedButton
                icon={<Feather name="camera" size={20} color="white" />}
                // onPress={() => launchCamera()}
                onPress={chooseFile}
                style={{
                  position: 'relative',
                  top: -20,
                  left: 55,
                  backgroundColor: COLORS.blue,
                }}
              />
            </View>
            {/* <Text style={{color: 'red'}}>Doctors Side</Text> */}
            <NormalInput
              title={'Name'}
              placeholder={'Name'}
              onChangeText={text => {
                setDocData({...docData, name: text});
                setErr({...err, name: ''});
              }}
              style={{width: '100%'}}
              err={err?.name}
              value={docData.name}
              editable={false}
            />
            <NormalInput
              title={'Email'}
              placeholder={'Email'}
              onChangeText={text => {
                setDocData({...docData, email: text});
                setErr({...err, email: ''});
              }}
              style={{width: '100%'}}
              err={err?.email}
              value={docData.email}
              keyboardType="email"
              editable={false}
            />
            <NormalInput
              title={'Mobile'}
              placeholder={'Mobile'}
              onChangeText={text => {
                setDocData({...docData, mobile: text});
                setErr({...err, mobile: ''});
              }}
              style={{width: '100%'}}
              err={err?.mobile}
              value={docData.mobile}
              keyboardType="numeric"
            />

            <NormalInput
              title={'Gender'}
              placeholder={'Gender'}
              onChangeText={text => {
                setDocData({...docData, gender: text});
                setErr({...err, gender: ''});
              }}
              style={{width: '100%'}}
              err={err?.gender}
              value={docData.gender}
              editable={false}
            />
            <NormalInput
              title={'Date of Birth'}
              placeholder={'DD/MM/YYYY'}
              onChangeText={text => {
                setDocData({...docData, birthDate: text});
                setErr({...err, birthDate: ''});
              }}
              style={{width: '100%'}}
              err={err?.birthDate}
              value={docData.birthDate}
              editable={false}
            />
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Country
            </Text>

            <DropDown
              onPress={() => {
                setCountrySheet(true);
              }}
              value={docData?.country}
              placeholder={'Choose country'}
              style={{
                width: DIMENSIONS.width - 48,
                elevation: 12,
                shadowColor: err ? `${COLORS.Red}aa` : `${COLORS.blue}cc`,
                shadowOpacity: 0.2,
              }}

              // err={errors?.country}
            />

            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              State
            </Text>

            <DropDown
              onPress={() => {
                setStateSheet(true);
              }}
              value={docData.state}
              placeholder={'Choose state'}
              style={{
                width: DIMENSIONS.width - 48,
                elevation: 12,
                shadowColor: err ? `${COLORS.Red}aa` : `${COLORS.blue}cc`,
                shadowOpacity: 0.2,
              }}
              // err={errors?.state}
            />
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              City
            </Text>

            <DropDown
              onPress={() => {
                setCitySheet(true);
              }}
              value={docData.city}
              placeholder={'Choose city'}
              style={{
                width: DIMENSIONS.width - 48,
                elevation: 12,
                shadowColor: err ? `${COLORS.Red}aa` : `${COLORS.blue}cc`,
                shadowOpacity: 0.2,
              }}
              // err={errors?.city}
            />
            <Text style={{...FONT.subTitle, ...styles.placeholderText}}>
              Qualification
            </Text>

            <DropDown
              onPress={() => {
                setQualificationSheet(true);
              }}
              value={docData.qualification}
              placeholder={'Select Qualification'}
              style={{
                width: DIMENSIONS.width - 48,
                elevation: 12,
                shadowColor: err ? `${COLORS.Red}aa` : `${COLORS.blue}cc`,
                shadowOpacity: 0.2,
              }}
              // err={errors?.qualification}
            />
            <Button
              title="Update"
              style={{
                width: DIMENSIONS.width - 50,
                marginTop: 30,
                elevation: 20,
                shadowColor: `${COLORS.accentColor}cc`,
                alignSelf: 'center',
              }}
              onPress={() => {
                edit_Profile();
                // Alert.alert('Updating');
                // navigation.goBack();
              }}
            />
            <View style={{height: 90}} />
          </>
        ) : (
          <>
            <View
              style={{
                backgroundColor: COLORS.background,
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: image
                    ? image
                    : `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${userData?.name}&background_color=003467&is_bold=true`,
                }}
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 21,
                  borderWidth: 2,
                  borderColor: COLORS.blue,
                  // margin: 20,
                  // position: 'absolute',
                  // top: 70,
                }}
              />
              <RoundedButton
                icon={<Feather name="camera" size={20} color="white" />}
                // onPress={() => launchCamera()}
                onPress={chooseFile}
                style={{
                  position: 'relative',
                  top: -20,
                  left: 55,
                  backgroundColor: COLORS.blue,
                }}
              />
            </View>
            <NormalInput
              title={'Name'}
              placeholder={'Name'}
              onChangeText={text => {
                setUserData({...userData, name: text});
                setErr({...err, name: ''});
              }}
              style={{width: '100%'}}
              err={err?.name}
              value={userData.name}
              editable={false}
            />
            <NormalInput
              title={'Email'}
              placeholder={'Email'}
              onChangeText={text => {
                setUserData({...userData, email: text});
                setErr({...err, email: ''});
              }}
              style={{width: '100%'}}
              err={err?.email}
              value={userData.email}
              keyboardType="email"
              editable={false}
            />
            <NormalInput
              title={'Mobile'}
              placeholder={'Mobile'}
              onChangeText={text => {
                setUserData({...userData, mobile: text});
                setErr({...err, mobile: ''});
              }}
              style={{width: '100%'}}
              err={err?.mobile}
              value={userData.mobile}
              keyboardType="numeric"
            />
            <NormalInput
              title={'Weight in Kg'}
              placeholder={'Weight'}
              onChangeText={text => {
                setUserData({...userData, weight: text});
                setErr({...err, weight: ''});
              }}
              style={{width: '100%'}}
              err={err?.weight}
              value={userData.weight}
              keyboardType="numeric"
            />
            <NormalInput
              title={'Height in cm'}
              placeholder={'Height'}
              onChangeText={text => {
                setUserData({...userData, height: text});
                setErr({...err, height: ''});
              }}
              style={{width: '100%'}}
              err={err?.height}
              value={userData.height}
              keyboardType="numeric"
            />
            <NormalInput
              title={'BloodGroup'}
              placeholder={'BloodGroup'}
              onChangeText={text => {
                setUserData({...userData, bloodGroup: text});
                setErr({...err, bloodGroup: ''});
              }}
              style={{width: '100%'}}
              err={err?.bloodGroup}
              value={userData.bloodGroup}
            />
            <NormalInput
              title={'Gender'}
              placeholder={'Gender'}
              onChangeText={text => {
                setUserData({...userData, gender: text});
                setErr({...err, gender: ''});
              }}
              style={{width: '100%'}}
              err={err?.gender}
              value={userData.gender}
              editable={false}
            />
            <NormalInput
              title={'Date of Birth'}
              placeholder={'DD/MM/YYYY'}
              onChangeText={text => {
                setUserData({...userData, birthDate: text});
                setErr({...err, birthDate: ''});
              }}
              style={{width: '100%'}}
              err={err?.birthDate}
              value={userData.birthDate}
              editable={false}
            />
            <Button
              title="Update"
              style={{
                width: DIMENSIONS.width - 50,
                marginTop: 30,
                elevation: 20,
                shadowColor: `${COLORS.accentColor}cc`,
                alignSelf: 'center',
              }}
              onPress={() => {
                edit_Profile();
                // Alert.alert('Updating');
                // navigation.goBack();
              }}
            />
            <View style={{height: 90}} />
          </>
        )}
      </ScrollView>
      <Actionsheet
        hideDragIndicator
        isOpen={countrySheet}
        onClose={() => setCountrySheet(false)}>
        <Actionsheet.Content>
          <View style={{height: 20}} />
          <Input
            placeholder={'Search country name'}
            onChangeText={text => {
              // setSearchTerm(text);
              // handleSearchCountry(text);
              // const searchFilterCountry = text => {
              if (text) {
                const newData = countries?.filter(item => {
                  const itemData = item?.name
                    ? item?.name?.toUpperCase()
                    : ''.toUpperCase();
                  const textData = text?.toUpperCase();
                  return itemData.indexOf(textData) > -1;
                });
                setCountries(newData);
                setSearchTerm(text);
              }
              //  else {
              //   setfilterCountry(countries);
              //   setsearchCountry(text);
              // }
              // };
            }}
          />
          <View style={{height: 20}} />
          <FlatList
            data={countries}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{width: DIMENSIONS?.width - 40, padding: 5}}
                  onPress={() => {
                    setDocData({...docData, country: item?.name});
                    setCountrySheet(false);
                    // setErrors({...errors, country: ''});
                    setDocData({...docData, state: ''});
                    setDocData({...docData, city: ''});
                    getState(item?.iso2);
                  }}>
                  <Text style={{...FONT?.title}}>{item?.name}</Text>
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
                    setDocData({...docData, state: item?.name});
                    setStateSheet(false);
                    setDocData({...docData, city: ''});
                    getCity(item?.iso2);
                  }}>
                  <Text style={{...FONT.title}}>{item?.name}</Text>
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
                    setDocData({...docData, city: item?.name});
                    setCitySheet(false);
                  }}>
                  <Text style={{...FONT.title}}>{item?.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Actionsheet.Content>
      </Actionsheet>

      <Actionsheet isOpen={genderSheet} onClose={() => setGenderSheet(false)}>
        <Actionsheet.Content>
          {['Male', 'Female', 'Other'].map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setGenderSheet(false);
                  setDocData({...docData, gender: item});
                }}
                key={item}>
                <Text style={{...FONT.title}}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </Actionsheet.Content>
      </Actionsheet>

      <Actionsheet
        isOpen={qualificationSheet}
        onClose={() => setQualificationSheet(false)}>
        <Actionsheet.Content>
          <FlatList
            data={qualifications}
            keyExtractor={item => item}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setDocData({...docData, qualification: item});
                    setQualificationSheet(false);
                  }}>
                  <Text style={{...FONT.title}}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Container>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  placeholderText: {
    width: DIMENSIONS?.width - 60,
    marginTop: 10,
    marginBottom: 5,
  },
});
