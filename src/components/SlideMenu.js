import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from './Buttons';
import {resetRedux, setAuthenticated} from '../redux/actions';
// import RNRestart from 'react-native-restart';

const SlideMenu = ({navigation}) => {
  const dispatch = useDispatch();
  const userType = useSelector(state => state?.userType);
  // console.log(userType);

  const options = [
    {
      id: '1',
      name: 'My Appointments',
      icon: <Foundation name="calendar" size={30} color={COLORS?.blue} />,
      navigation: userType == '2' ? ROUTES.drAppoitments : ROUTES.appointment,
    },
    {
      id: '2',
      name: 'Medicine Tracker',
      icon: <FontAwesome5 name="capsules" size={24} color={COLORS?.blue} />,
      navigation: ROUTES.medicinetracker,
    },
    {
      id: '3',
      name: 'Phone Directory',
      icon: <FontAwesome name="phone" size={24} color={COLORS?.blue} />,
      navigation: ROUTES.phonedirectory,
    },
    {
      id: '4',
      name: 'Find a Doctor',
      icon: <Fontisto name="doctor" size={24} color={COLORS?.blue} />,
      navigation: ROUTES.finddoctor,
    },
    {
      id: '5',
      name: 'Settings',
      icon: <Ionicons name="settings" size={24} color={COLORS?.blue} />,
      navigation: ROUTES.settings,
    },
    {
      id: '6',
      name: 'BMI Checker',
      icon: <Entypo name="calculator" size={24} color={COLORS?.blue} />,
      navigation: ROUTES.bmichecker,
    },
    // {
    //   id: '7',
    //   name: 'Create Report',
    //   icon: <FontAwesome name="file" size={21} color={COLORS?.blue} />,
    //   navigation: ROUTES.createReport,
    // },
    {
      id: '8',
      name: 'App Info',
      icon: (
        <Ionicons name="information-circle" size={24} color={COLORS.blue} />
      ),
      navigation: ROUTES.appInfo,
    },
  ];

  const userData = useSelector(state => state?.user);

  useEffect(() => {}, []);

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          height: DIMENSIONS?.height / 4,
          backgroundColor: `${COLORS?.blue}`,
          alignItems: 'center',
        }}
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ROUTES.profile)}>
        <Image
          source={{
            uri: 'https://t4.ftcdn.net/jpg/02/32/98/33/360_F_232983351_z5CAl79bHkm6eMPSoG7FggQfsJLxiZjY.jpg',
          }}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}
        />
        <LinearGradient
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            alignItems: 'center',
            height: '30%',
            justifyContent: 'center',
          }}
          colors={['#0000', '#0007', '#000']}>
          <Text
            style={{
              ...FONT?.header,
              fontSize: 18,
              color: '#fff',
            }}>
            {userType == '2' ? 'Dr.' : null} {userData?.name}
          </Text>
          <Text
            style={{
              ...FONT?.title,
              color: '#fff',
            }}>
            {userData?.specialty}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={{alignItems: 'center', paddingTop: 10}}>
        {options.map(item => {
          if (item?.id == '7' && userType == '1') {
            return null;
          } else if (userType == '2') {
            if (item?.id == '2' || item?.id == '4') {
              return null;
            } else {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate(item.navigation);
                  }}
                  style={{
                    flexDirection: 'row',
                    marginVertical: 6,
                    alignItems: 'center',
                    height: 50,
                    borderRadius: 10,
                    width: '90%',
                    backgroundColor: '#fff',
                    paddingLeft: 15,
                    elevation: 20,
                    shadowColor: `${COLORS?.blue}88`,
                  }}
                  activeOpacity={0.7}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 10,
                    }}>
                    {item.icon}
                  </View>
                  <Text
                    style={{
                      ...FONT?.title,
                      marginLeft: 20,
                      color: COLORS.blue,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }
          } else {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  navigation.navigate(item.navigation);
                }}
                style={{
                  flexDirection: 'row',
                  marginVertical: 6,
                  alignItems: 'center',
                  height: 50,
                  borderRadius: 10,
                  width: '90%',
                  backgroundColor: '#fff',
                  paddingLeft: 15,
                  elevation: 20,
                  shadowColor: `${COLORS?.blue}88`,
                }}
                activeOpacity={0.7}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 10,
                  }}>
                  {item.icon}
                </View>
                <Text
                  style={{
                    ...FONT?.title,
                    marginLeft: 20,
                    color: COLORS.blue,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }
        })}
      </View>

      <View style={{position: 'absolute', bottom: 20, width: '100%'}}>
        <View
          style={{
            padding: 10,
            // borderTopWidth: 1,
            borderTopColor: COLORS?.blue,
          }}>
          <Button
            title={'Logout'}
            style={{width: '90%', alignSelf: 'center'}}
            onPress={() => {
              navigation?.closeDrawer();
              dispatch(resetRedux());
              // RNRestart.restart();
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation?.navigate(ROUTES?.home);
        }}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: '#fff',
          height: 40,
          width: 40,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="md-home" color={COLORS?.blue} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default SlideMenu;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
