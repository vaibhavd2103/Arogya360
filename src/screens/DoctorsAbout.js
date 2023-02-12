import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
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

const DoctorsAbout = ({navigation}) => {
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
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
            }}
            style={styles.profilePic}
          />
          <Text style={{...FONT.header, paddingVertical: 10}}>
            Dr. Tanisha Thakur
          </Text>
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

        <Title_SubTitle title="Country" subTitle={'India'} />
        <Title_SubTitle title="State" subTitle={'Maharashtra'} />
        <Title_SubTitle title="City" subTitle={'Pune'} />
        <Title_SubTitle title="Qualification" subTitle={'MBBS'} />
        <Title_SubTitle title="Expertise" subTitle={'Gynacologist'} />
        <Title_SubTitle title="Qualification" subTitle={'MBBS'} />
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
        />
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
