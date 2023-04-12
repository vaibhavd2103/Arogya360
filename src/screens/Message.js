import {StyleSheet, TextInput, View, FlatList} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import CustomHeader from '../components/CustomHeader';
import Search from 'react-native-vector-icons/Feather';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import MessageComponent from '../components/MessageComponent';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import {useEffect} from 'react';
import API from '../axios/api';
import Loader from '../components/Loader';

data = [
  {
    id: '1',
    userName: 'Tanya Thakur',
    lastMessage: 'Hii Tanya',
    time: '2:00 pm',
    profilePhoto:
      'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg',
  },
  {
    id: '2',
    userName: 'Tanisha Thakur',
    lastMessage: 'Hii Tanya',
    time: '3:00 pm',
    profilePhoto:
      'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg',
  },
  {
    id: '3',
    userName: 'Sakshi Chavre',
    lastMessage: 'Hii Tanya',
    time: '2:00 pm',
    profilePhoto:
      'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg',
  },
  {
    id: '4',
    userName: 'Vaibhav Dange',
    lastMessage: 'Hii Tanya',
    time: '2:00 pm',
    profilePhoto:
      'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg',
  },
];

const Message = () => {
  // =================useState==============================

  const [myChatRooms, setMyChatRooms] = useState([]);
  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);
  const [loading, setLoading] = useState(true);

  const getChatRooms = async () => {
    await API.getMyChatRooms(userId, parseInt(userType))
      .then(res => {
        // console.log('----------------->', res?.data);
        setMyChatRooms(res?.data);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getChatRooms();
  }, []);

  return (
    <Container>
      <CustomHeader title={'Messages'} />
      <Loader
        loading={loading}
        uri={require('../assets/Lottie/chatLoader.json')}
      />
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          placeholder={'Search'}
          placeholderTextColor="#555"
        />
        <Search
          name="search"
          size={24}
          color="black"
          style={{paddingRight: 25}}
        />
      </View>
      <View style={{marginTop: 10, height: '100%'}}>
        <FlatList
          data={myChatRooms}
          keyExtractor={item => item?._id}
          renderItem={({item, index}) => {
            return (
              <View>
                <MessageComponent item={item} />
              </View>
            );
          }}
          ListFooterComponent={() => {
            return <View style={{height: 20}}></View>;
          }}
        />
      </View>
    </Container>
  );
};

export default Message;

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: DIMENSIONS.width - 50,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 10,
    height: 45,
    elevation: 10,
    // padding: 10,
  },
  searchInput: {
    height: 45,
    width: DIMENSIONS.width - 80,
    borderRadius: 30,
    padding: 10,
    borderWidth: 0,
    ...FONT.title,
    paddingHorizontal: 10,
    paddingLeft: 30,
  },
});
