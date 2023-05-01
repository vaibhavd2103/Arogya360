import {StyleSheet, Text, View, FlatList} from 'react-native';
import React,{useState, useEffect}  from 'react';
import Container from '../components/Container';
import ArticleCard from '../components/ArticleCard';
import API from '../axios/api';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const DoctorsArticles = () => {
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
      docName: 'Dr.Tanisha Thakur',
      speciality: 'Cardiologist',
      img: 'https://www.w3schools.com/css/img_lights.jpg',
      article:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];
  const user = useSelector(state => state?.user);
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    await API.getAllArticles()
      .then(res => {
        console.log('MY details fetched', res.data);
        setArticles(res?.data);
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
      getArticles();
    }
  }, [isFocused]);
  return (
    <Container>
      <FlatList
        data={articles}
        keyExtractor={item => item?._id}
        renderItem={({item}) => {
          if(item?.doctorId == user?._id){
              return <ArticleCard item={item} />;
            }
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

export default DoctorsArticles;

const styles = StyleSheet.create({});
