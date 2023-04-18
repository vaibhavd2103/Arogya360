import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import HomeAppointmentCard from './HomeAppointmentCard';
import {useNavigation} from '@react-navigation/native';
import HomeRecentArticlesCard from './HomeRecentArticlesCard';
import ArticleCard from './ArticleCard';

const HomeRecentArticles = ({data}) => {
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Vaibhav Dange',
      reason: 'Medical checkup for over fitness',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '2',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Tanya Thakur',
      reason: 'Medical checkup for over weight',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '3',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Someone here',
      reason: 'Medical checkup for over thinking',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '4',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Someone here',
      reason: 'Medical checkup for over thinking',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
  ]);

  const navigation = useNavigation();

  return (
    <View style={{width: DIMENSIONS?.width - 0, marginHorizontal: 0}}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            ...FONT?.header,
            color: COLORS?.grey,
          }}>
          Articles you may like
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate(ROUTES?.article);
          }}>
          <Text
            style={{
              ...FONT?.title,
              color: COLORS?.light_black,
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        bounces={false}
        pagingEnabled
        keyExtractor={item => item?._id}
        renderItem={({item, index}) => {
          return (
            <>
              <ArticleCard item={item} index={index} length={data?.length} />
            </>
          );
        }}
      />
    </View>
  );
};

export default HomeRecentArticles;

const styles = StyleSheet.create({});
