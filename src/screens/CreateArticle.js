import {StyleSheet, Text, View, Alert, Image, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {NormalInput} from './../components/TextInput';
import {Button} from '../components/Buttons';
import {useSelector} from 'react-redux';
import API from '../axios/api';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';
import getPath from '@flyerhq/react-native-android-uri-path';

const CreateArticle = ({navigation}) => {
  const user = useSelector(state => state?.user);
  const [loading, setLoading] = useState(false);

  const postArticle = async () => {
    setLoading(true);

    const name = pickedImage?.name;
    const imageUri = getPath(pickedImage?.uri);
    const reference = storage().ref(`articles/${name}`);

    const task = await reference.putFile(imageUri).then(res => {
      console.log(res);
      storage()
        .ref(`articles/${name}`)
        .getDownloadURL(res.ref)
        .then(uri => {
          // console.log('image uri is------> ', uri);
          const data = {
            doctorId: user?._id,
            createdAt: new Date(),
            doctorName: user?.name,
            doctorPhoto: user?.avtar_url,
            description: articleData?.desc,
            title: articleData?.title,
            qualification: user?.qualification,
            image: uri,
          };
          API.createArticle(data)
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
        });
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

  const [pickedImage, setPickedImage] = useState();

  const openFilePicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setPickedImage(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  return (
    <Container>
      <ScrollView>
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
          <Button
            title={'Add Image/Video'}
            onPress={openFilePicker}
            style1={{fontSize: 12}}
            style={{
              backgroundColor: COLORS?.green,
              width: '50%',
              alignSelf: 'center',
            }}
          />
          <Image
            source={{uri: pickedImage?.uri}}
            style={{width: '100%', height: DIMENSIONS?.width * 1.3}}
          />
        </View>
      </ScrollView>
      <Button
        title="Create"
        style={{
          width: DIMENSIONS.width - 50,
          // marginTop: 30,
          elevation: 20,
          shadowColor: `${COLORS.accentColor}cc`,
          alignSelf: 'center',
        }}
        onPress={() => {
          postArticle();
        }}
      />
    </Container>
  );
};

export default CreateArticle;

const styles = StyleSheet.create({});
