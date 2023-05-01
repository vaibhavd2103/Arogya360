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
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {RecomendedPrecaution} from '../constants/data';
import API from '../axios/api';
import {useSelector} from 'react-redux';

const Home = props => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [random, setRandom] = useState(
    Math.floor(Math.random() * (50 - 3 + 1)) + 3,
  );
  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);
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

  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    await API.getAllArticles()
      .then(res => {
        // console.log(res.data);
        setArticles(res?.data);
      })
      .catch(error => {
        console.error('Error fetching user');
      });
  };

  const [appointments, setAppointments] = useState([]);

  const getMyAppointments = async () => {
    console.log('getMyAppointments patient');
    await API?.getMyAppointments(userId, parseInt(userType))
      .then(res => {
        // console.log(res?.data);
        setAppointments(res?.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(err => {
        console.log(err?.data?.message);
      });
  };
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getNews();
      getMyAppointments();
      getArticles();
    }
  }, [isFocused]);
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
            precaution={RecomendedPrecaution[random].precaution}
            title={RecomendedPrecaution[random].topic}
          />
        </View>
        <View style={{marginBottom: 0, marginTop: 10}}>
          <HomeAppointments appointments={appointments} />
        </View>
        <View style={{marginBottom: 20, marginTop: 10}}>
          <HomeRecentArticles data={articles} />
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
