import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
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
import {Title_SubTitle} from '../components/Components';
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../redux/actions';
import API from './../axios/api';
import {useIsFocused} from '@react-navigation/native';
import {AVATAR_KEY} from '../../config';

const DoctorsAbout = ({navigation}) => {
  const dispatch = useDispatch();
  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    console.log(userId, userType);
    await API.getUserDetails(userId, userType)
      .then(res => {
        // console.log('MY details fetched', res.data);
        setProfileData(res?.data?.user);
        dispatch(setUserData(res?.data?.user));
        // dispatch(setUserId(res?.data?.userId));
      })
      .catch(error => {
        console.error(
          'Error fetching user',
          error?.response?.data?.status_message ?? error?.message,
        );
      });
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      fetchUser();
    }
  }, [userId, isFocused]);
  return (
    <Container style={{paddingHorizontal: 25}}>
      <ScrollView
        style={{
          // backgroundColor: Colors.yellow,
          width: '100%',
          height: '100%',
        }}>
        {/* <Text style={{...FONT.header}}>DoctorsAbout</Text> */}
        <View
          style={{
            paddingHorizontal: 25,
            alignItems: 'center',
            marginBottom: 10,
          }}>
          <Image
            source={{
                 uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${profileData?.name}&background_color=003467&is_bold=true`
            //  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
            }}
            style={styles.profilePic}
          />
          <Text style={{...FONT.header, paddingVertical: 10}}>
            Dr. {profileData?.name}
          </Text>
        </View>

        {/* <IconTitle
        value="20"
        icon={<Feather name="phone-call" size={24} color="black" />}
      /> */}
        <IconTitle
          value={profileData?.mobile}
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
          value={profileData?.email}
        />
        <IconTitle
          icon={<FontAwesome name="birthday-cake" size={24} color="black" />}
          value={profileData?.dob}
        />
        <IconTitle
          icon={<FontAwesome name="transgender" size={24} color="black" />}
          value={profileData?.gender}
        />

        <Title_SubTitle title="Country" subTitle={profileData?.country} />
        <Title_SubTitle title="State" subTitle={profileData?.state} />
        <Title_SubTitle title="City" subTitle={profileData?.city} />
        <Title_SubTitle
          title="Qualification"
          subTitle={profileData?.qualification}
        />
        <Title_SubTitle title="Specialty" subTitle={profileData?.specialty} />
        <Title_SubTitle title="MCI Number" subTitle={profileData?.mci_number} />
        {/* <Title_SubTitle title="Qualification" subTitle={'MBBS'} />
        <Title_SubTitle
          title="EXPERIENCE"
          subTitle={
            'Details like how many years of experience the doctors have, how many patients the doctors have consulted, and how many patients the doctors consult on a weekly basis..'
          }
        />
        <Title_SubTitle
          title="Academic Details"
          subTitle={
            'Details like how many years of experience the doctors have, how many patients the doctors have consulted, and how many patients the doctors consult on a weekly basis..'
          }
        />
        <Title_SubTitle
          title="Awards & Publications"
          subTitle={
            'Here the user can view the doctor’s achievements like the awards received by the doctors and any honor they carry.'
          }
        />
        <Title_SubTitle
          title="Consulting Languages:

"
          subTitle={
            'Doctors should mention the known languages here. English is a common language for all the doctors, so it will be a default setting in the consulting language field. Apart from English, doctors need to set their native speaking languages and known languages. Doctors can add multiple languages in this field.'
          }
        /> */}
        <View style={{height: 90}} />
      </ScrollView>
    </Container>
  );
};

export default DoctorsAbout;

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
