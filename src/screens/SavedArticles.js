import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import ArticleCard from '../components/ArticleCard';

const SavedArticles = ({navigation, route}) => {
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
      id: '3',
      profilePic: 'https://www.w3schools.com/css/img_lights.jpg',
      docName: 'Dr.Tanya Thakur',
      speciality: 'Gynacologist',
      img: 'https://www.w3schools.com/css/img_lights.jpg',
      article:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  return (
    <Container>
      <FlatList
        data={articleData}
        keyExtractor={item => item?.id}
        renderItem={({item}) => {
          return <ArticleCard item={item} saved={true} />;
        }}
        ListHeaderComponent={() => {
          return <View style={{height: 20}}></View>;
        }}
        ListFooterComponent={() => {
          return <View style={{height: 100}}></View>;
        }}
      />
    </Container>
  );
};

export default SavedArticles;

const styles = StyleSheet.create({});
