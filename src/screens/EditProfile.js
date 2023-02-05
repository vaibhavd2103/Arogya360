import {StyleSheet, Text, View, Alert, ScrollView, Image} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Container from '../components/Container';
import {NormalInput} from '../components/TextInput';
import {Button, RoundedButton} from '../components/Buttons';
import {COLORS, DIMENSIONS} from '../constants/constants';
import Feather from 'react-native-vector-icons/Feather';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState();
  const [userData, setUserData] = useState({
    name: '',

    email: '',
    height: '',
    weight: '',
    mobile: '',
    birthDate: '',
    gender: '',
    bloodGroup: '',
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
      }
    });
  };

  const editprofile = () => {
    Alert.alert('Saving');
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
        <View
          style={{backgroundColor: COLORS.background, alignItems: 'center'}}>
          <Image
            source={{
              uri: image
                ? image
                : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
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
            editprofile();
            // Alert.alert('Updating');
            // navigation.goBack();
          }}
        />
        <View style={{height: 90}} />
      </ScrollView>
    </Container>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
