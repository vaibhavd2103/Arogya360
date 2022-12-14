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
            <HomeRecentArticles />
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
