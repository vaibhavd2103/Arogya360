import {ScrollView, StyleSheet, Text, View} from 'react-native';
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

const Home = props => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    await axios
      .get(`https://newsapi.org/v2/everything?q=health&apiKey=${NEWS_API_KEY}`)
      .then(res => {
        console.log(res?.data);
        setNews(res?.data?.articles);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  const articleData = [
    {
      id: '1',
      profilePic: 'https://www.w3schools.com/css/img_lights.jpg',
      docName: 'Dr.Tanisha Thakur',
      speciality: 'Cardiologist',
      article:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    },
    {
      id: '2',
      profilePic:
        'data:image/jpeg;base64,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',
      docName: 'Dr.Sakshi Chavre',
      speciality: 'Gynacologist',
      img: 'https://www.w3schools.com/css/img_lights.jpg',
      article:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    },
    {
      id: '3',
      profilePic: 'https://www.w3schools.com/css/img_lights.jpg',
      docName: 'Dr.Tanya Thakur',
      speciality: 'Gynacologist',
      img: 'https://www.w3schools.com/css/img_lights.jpg',
      article:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      id: '4',
      profilePic: 'https://www.w3schools.com/css/img_forest.jpg',
      docName: 'Dr.Vaibhav Dange',
      speciality: 'Physio Therepist',
      article:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the',
    },
  ];

  return (
    <ScrollView>
      <Container>
        <Loader loading={loading} />
        <CustomHeader
          style={{width: '100%'}}
          title="Home"
          LeftIcon={() => {
            return (
              <MaterialCommunityIcons name="menu" size={24} color="black" />
            );
          }}
          onLeftIconPress={() => props.navigation.openDrawer()}
        />
        <View style={{flex: 1, paddingHorizontal: 0}}>
          <View style={{marginVertical: 20}}>
            <PrecautionCard
              precaution={`Avoid physical contact like handshakes, hand holding or hugs. Avoid touching surfaces such as table tops, chairs, door handles etc. b) Practice good hygiene Wash your hands frequently using soap and water`}
            />
          </View>
          <View style={{marginBottom: 0, marginTop: 10}}>
            <HomeAppointments />
          </View>
          <View style={{marginBottom: 0, marginTop: 10}}>
            <HomeRecentArticles data={articleData} />
          </View>
          <View style={{marginBottom: 0, marginTop: 10}}>
            <HomeNews data={news} />
          </View>
          <View style={{height: 30}}></View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
