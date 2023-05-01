import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import ArticleCard from '../components/ArticleCard';
import API from '../axios/api';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const SavedArticles = ({navigation, route}) => {
  const userId = useSelector(state => state?.user_id);
  const [articles, setArticles] = useState([]);
  const getArticles = async () => {
    await API.getAllArticles()
      .then(res => {
        // console.log('MY details fetched', res.data);
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
      <FlatList
        data={articleData}
        keyExtractor={item => item?._id}
        renderItem={({item}) => {
          if (item?.savePost?.includes(userId)) {
            return <ArticleCard item={item} saved={true} />;
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

export default SavedArticles;

const styles = StyleSheet.create({});
