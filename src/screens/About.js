import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import Container from './../components/Container';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {IconTitle} from '../components/Buttons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {useSelector} from 'react-redux';
// import API from '../axios/api';

const About = () => {
  // const userType = useSelector(state => state?.userType);
  // const userId = useSelector(state => state?.user_id);
  // const [userData, setUserData] = useState([]);
  // const [loading, setLoading] = useState(false)
  // const fetchUser = async () => {
  //   await API.getUserDetails(id,userType)
  //     .then(res => {
  //       console.log('MY details fetched', res.data);
  //       dispatch(setUser(res?.data));
  //       dispatch(setUserId(res?.data?.userId));
  //     })
  //     .catch(error => {
  //       console.error(
  //         'Error fetching user',
  //         error?.response?.data?.status_message ?? error?.message,
  //       );
  //     });
  // };

  return (
    <Container style={{padding: 25}}>
      {/* <Text style={{...FONT.header}}>About</Text> */}
      <View
        style={{
          paddingHorizontal: 25,
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
          }}
          style={styles.profilePic}
        />
        <Text style={{...FONT.header, paddingVertical: 10}}>
          Tanisha Thakur
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          marginBottom: 10,
        }}>
        <View style={styles.boxes}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <Entypo name="dot-single" size={30} color={COLORS.blue} />
            <Text style={{...FONT.subTitle, color: 'gray'}}>Weight</Text>
          </View>
          <Text style={{...FONT.header, fontSize: 18, paddingLeft: 30}}>
            55kg
          </Text>
        </View>
        <View style={styles.boxes}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <Entypo name="dot-single" size={30} color={COLORS.blue} />
            <Text style={{...FONT.subTitle, color: 'gray'}}>Height</Text>
          </View>
          <Text style={{...FONT.header, fontSize: 18, paddingLeft: 30}}>
            170cm
          </Text>
        </View>
        <View style={styles.boxes}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'center',
            }}>
            <Entypo name="dot-single" size={30} color={COLORS.blue} />
            <Text style={{...FONT.subTitle, color: 'gray'}}>Age</Text>
          </View>
          <Text style={{...FONT.header, fontSize: 18, paddingLeft: 30}}>
            22
          </Text>
        </View>
      </View>
      {/* <IconTitle
        value="20"
        icon={<Feather name="phone-call" size={24} color="black" />}
      /> */}
      <IconTitle
        value="+91 9175954524"
        icon={<Feather name="phone-call" size={24} color="black" />}
      />
      <IconTitle
        icon={
          <MaterialCommunityIcons
            name="email-open-outline"
            size={24}
            color="black"
          />
        }
        value="abc@gmail.com"
      />
      <IconTitle
        icon={<FontAwesome name="birthday-cake" size={24} color="black" />}
        value="20/11/2001"
      />
      <IconTitle
        icon={<FontAwesome name="transgender" size={24} color="black" />}
        value="Male"
      />
      <IconTitle
        icon={<Entypo name="drop" size={20} color="red" />}
        value="A+"
      />
      <IconTitle
        icon={<AntDesign name="medicinebox" size={24} color="black" />}
        value="Medicine Tracker On"
      />
      <IconTitle
        icon={
          <MaterialCommunityIcons name="cup-water" size={24} color="black" />
        }
        value="Water Reminder On"
      />
      <IconTitle
        icon={<Ionicons name="notifications-outline" size={24} color="black" />}
        value="Notifications On"
      />
    </Container>
  );
};

export default About;

const styles = StyleSheet.create({
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 20,
  },
  boxes: {
    width: '30%',
    backgroundColor: COLORS.white,
    height: 70,
    borderRadius: 10,
    elevation: 2,
    padding: 5,
  },
});
