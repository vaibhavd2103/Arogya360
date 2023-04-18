import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {NormalInput} from './../components/TextInput';
import {Button} from '../components/Buttons';
import {useSelector} from 'react-redux';
import API from '../axios/api';

const CreateArticle = ({navigation}) => {
  const user = useSelector(state => state?.user);
  const [loading, setLoading] = useState(false);
  const postArticle = async () => {
    setLoading(true);
    const data = {
      doctorId: user?._id,
      createdAt: new Date(),
      doctorName: user?.name,
      doctorPhoto: user?.avtar_url,
      description: articleData?.desc,
      title: articleData?.title,
      qualification: user?.qualification,
    };
    await API.createArticle(data)
      .then(res => {
        // console.log(res?.data);
        navigation.goBack();
        // fetchUser();
        setLoading(false);
        //  setAllUser(res?.data);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };
  const [articleData, setArticleData] = useState({
    name: '',
    email: '',
    doctorId: '',
    title: '',
    desc: '',
    profileImg: '',
  });
  const [err, setErr] = useState({
    name: '',
    email: '',
    doctorId: '',
    title: '',
    desc: '',
    profileImg: '',
  });
  return (
    <Container>
      <View
        style={{
          flex: 0.9,
          paddingHorizontal: 24,
          paddingTop: 24,
          //   backgroundColor: 'pink',
        }}>
        <NormalInput
          title={'Title'}
          placeholder={'Title'}
          onChangeText={text => {
            setArticleData({...articleData, title: text});
            setErr({...err, title: ''});
          }}
          style={{
            width: '100%',
            textAlignVertical: 'top',
            minHeight: 40,
            height: null,
          }}
          err={err?.title}
          value={articleData.title}
          multiline={true}
        />
        <NormalInput
          title={'Description'}
          placeholder={'Description'}
          onChangeText={text => {
            setArticleData({...articleData, desc: text});
            setErr({...err, desc: ''});
          }}
          style={{
            width: '100%',
            textAlignVertical: 'top',
            minHeight: 90,
            height: null,
          }}
          err={err?.desc}
          value={articleData.desc}
          numberOfLines={3}
          multiline={true}
        />
      </View>
      <Button
        title="Create"
        style={{
          width: DIMENSIONS.width - 50,
          marginTop: 30,
          elevation: 20,
          shadowColor: `${COLORS.accentColor}cc`,
          alignSelf: 'center',
        }}
        onPress={() => {
          // editprofile();
          postArticle();
          // Alert.alert('Updating');
          // navigation.goBack();
        }}
      />
    </Container>
  );
};

export default CreateArticle;

const styles = StyleSheet.create({});
