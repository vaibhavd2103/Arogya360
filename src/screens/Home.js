import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../components/Container';
import CustomHeader from './../components/CustomHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PrecautionCard from '../components/PrecautionCard';
import HomeAppointments from '../components/HomeAppointments';
import HomeRecentArticles from '../components/HomeRecentArticles';
import axios from 'axios';
import {NEWS_API_KEY} from '../../config';
import Loader from '../components/Loader';
import HomeNews from '../components/HomeNews';
import {setUserType} from '../redux/actions';
import {COLORS, USERS} from '../constants/constants';
import {BackHandler} from 'react-native';
import {Alert} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

const Home = props => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    await axios
      .get(`https://newsapi.org/v2/everything?q=health&apiKey=${NEWS_API_KEY}`)
      .then(res => {
        // console.log(res?.data);
        setNews(res?.data?.articles);
        // setTimeout(() => {
        setLoading(false);
        // }, 2000);
        ////////////////////// done by sakshi remove after login setting usertype
        setUserType(USERS.doctor);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //       console.log('back pressed on home');
  //       BackHandler.exitApp();
  //     };
  //     const subscription = BackHandler.addEventListener(
  //       'hardwareBackPress',
  //       onBackPress,
  //     );
  //     return () => subscription.remove();
  //   }, []),
  // );

  const articleData = [
    {
      id: '1',
      profilePic:
        'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      docName: 'Dr.Tanisha Thakur',
      speciality: 'Cardiologist',
      img: 'https://www.a2ztaxcorp.com/wp-content/uploads/2022/01/medical-devices.jpg',
      article:
        'Integrated care systems (ICSs) were established to create partnerships for population health, not simply to better manage existing patterns of NHS care. In many systems, statutory status has been accompanied by the creation of director, or similar, roles with titles that include population health. Roles intended sometimes to stimulate a reframing of work across the whole leadership team but elsewhere simply leading a standalone programme of work, often primarily analytical. How these emergent roles develop matters.',
    },
    {
      id: '2',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjb31HfA089FgVlMcI2Tkrhjg6d-C_RADEQ&usqp=CAU',
      docName: 'Dr.Sakshi Chavre',
      speciality: 'Gynacologist',
      img: 'https://img.freepik.com/free-photo/medical-stethoscope-with-paper-cut-family_23-2148488217.jpg',
      article:
        'Debates about privatisation in the NHS have been around for decades – is it good or bad, is it happening now, will it happen in the future? Over time the content of the debate shifts and changes, even if the word privatisation stays the same.  ',
    },
    {
      id: '3',
      profilePic:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsCR5KiotkQ7jCzLeBJJTiyyQuCVA60HJLw&usqp=CAU',
      docName: 'Dr.Tanya Thakur',
      speciality: 'Gynacologist',
      img: 'https://images.unsplash.com/photo-1666214278797-b2cc1b12be76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      article:
        'All governments in recent decades have committed to reducing health inequalities, including among ethnic minority groups. The pandemic’s disproportionate impact on ethnic minority communities highlighted the critical importance of being able to measure health care need, use and outcomes among ethnic minority groups, in order to both mitigate the impact of Covid-19 and address ethnic disparities in health more generally. The analyses and research that followed illustrated the power of data to inform health strategies designed to protect and improve health. However, the caveat of poor quality of ethnicity coding in health records has been a constant theme, pre-dating the pandemic, requiring analysts to adjust for coding flaws prior to analysis or making do with sub-standard data quality.   ',
    },
    {
      id: '4',
      profilePic:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      docName: 'Dr.Vaibhav Dange',
      speciality: 'Physio Therepist',
      img: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      article:
        'Jackie Stevens, Associate Director of strategic work programmes, at Hampshire and Isle of Wight Integrated Care System writes about work to make home the heart of inclusion health in one integrated care system.',
    },
  ];

  return (
    <Container>
      <Loader loading={loading} />
      <CustomHeader
        style={{width: '100%'}}
        title="Home"
        LeftIcon={() => {
          return (
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
                backgroundColor: COLORS?.blue,
                marginHorizontal: 10,
              }}
              activeOpacity={0.8}
              onPress={() => props?.navigation.openDrawer()}>
              <MaterialCommunityIcons
                name="menu"
                size={24}
                color={COLORS?.white}
              />
            </TouchableOpacity>
          );
        }}
        onLeftIconPress={() => props.navigation.openDrawer()}
      />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 60,
        }}>
        <View style={{marginVertical: 20}}>
          <PrecautionCard
            precaution={`Avoid physical contact like handshakes, hand holding or hugs. Avoid touching surfaces such as table tops, chairs, door handles etc. b) Practice good hygiene Wash your hands frequently using soap and water`}
          />
        </View>
        <View style={{marginBottom: 0, marginTop: 10}}>
          <HomeAppointments />
        </View>
        <View style={{marginBottom: 20, marginTop: 10}}>
          <HomeRecentArticles data={articleData} />
        </View>
        <View style={{marginBottom: 0, marginTop: 10}}>
          <HomeNews data={news} navigation={props?.navigation} />
        </View>
        <View style={{height: 30}}></View>
      </ScrollView>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
