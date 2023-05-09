import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import Container from '../components/Container';
import {Button} from '../components/Buttons';
import {TitleSubTitle} from '../components/Components';
import {AVATAR_KEY} from '../../config';

const DoctorsProfile = ({navigation, route}) => {
  //   console.log(route.params.item);
  const item = route.params.item;
  //   console.log(route.params.item);
  return (
    <Container style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          marginHorizontal: 24,
          //   height: 160,
          backgroundColor: `#ECDCBC`,
          marginTop: 20,
          padding: 10,
          borderRadius: 10,
        }}>
        <Image
          source={{
            uri: item?.avatar_url
              ? item?.avatar_url
              : `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.name}&background_color=003467&is_bold=true`,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            flexGrow: 1,
            // height: 140,
            paddingLeft: 15,
          }}>
          <Text
            style={{
              ...FONT.header,
              fontSize: 16,
            }}>
            Dr. {item?.name.replace('Dr ' || 'DR. ', '')}
          </Text>
          <Text
            style={{
              ...FONT.subTitle,

              paddingVertical: 2,
            }}>
            Country: {item?.country ? item.country : 'Unknown'}
          </Text>
          <Text
            style={{
              ...FONT.subTitle,
            }}>
            Specialty : {item?.specialty}
          </Text>

          <Text
            style={{
              ...FONT.subTitle,

              paddingVertical: 2,
            }}>
            Gender : {item?.gender}
          </Text>
        </View>
      </View>
      <View
        style={{
          // backgroundColor: 'red',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <Button
          title="Message"
          style={{
            width: DIMENSIONS.width / 4,
            height: 40,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: COLORS.blue,
            color: COLORS.blue,
            margin: 10,
          }}
          style1={{...FONT.title, color: COLORS.blue}}
          onPress={() => {
            console.log('hello');
          }}
        /> */}
        <Button
          title="Book Appointment"
          style1={{...FONT.title, color: COLORS.white}}
          style={{width: DIMENSIONS.width / 2.5, height: 40}}
          onPress={() => {
            navigation.navigate(ROUTES.bookAppointment, {item: item});
          }}
        />
      </View>
      <ScrollView
        style={{
          // backgroundColor: Colors.yellow,
          width: '100%',
          height: '100%',
        }}
        contentContainerStyle={{
          //   backgroundColor: 'grey',
          //   height: DIMENSIONS.height > 700 ? '100%' : null,
          paddingHorizontal: 24,
        }}>
        <TitleSubTitle title={'QUALIFICATION'} subTitle={item?.qualification} />
        {/* <TitleSubTitle
          title="EXPERTISE"
          subTitle={
            'Each doctor will have their own expertise. They can mention those treatments in this field. If doctors have many years of experience and treated well in any specialty, they can mention that multiple specialties here.'
          }
        /> */}
        {/* <TitleSubTitle
          title="EXPERIENCE"
          subTitle={
            'Details like how many years of experience the doctors have, how many patients the doctors have consulted, and how many patients the doctors consult on a weekly basis..'
          }
        /> */}
        {/* <TitleSubTitle
          title="Academic Details"
          subTitle={
            'Details like how many years of experience the doctors have, how many patients the doctors have consulted, and how many patients the doctors consult on a weekly basis..'
          }
        />
        <TitleSubTitle
          title="Awards & Publications"
          subTitle={
            'Here the user can view the doctor’s achievements like the awards received by the doctors and any honor they carry.'
          }
        />
        <TitleSubTitle
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

export default DoctorsProfile;

const styles = StyleSheet.create({});
