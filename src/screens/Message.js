import {StyleSheet, Text, TextInput, View, FlatList} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import Input from '../components/TextInput';
import CustomHeader from '../components/CustomHeader';
import Search from 'react-native-vector-icons/Feather';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import MessageComponent from '../components/MessageComponent';

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
  return (
    <Container>
      <CustomHeader title={'Messages'} />
      <View style={styles.searchView}>
        <TextInput style={styles.searchInput} placeholder={'Search'} />
        <Search
          name="search"
          size={24}
          color="black"
          style={{paddingRight: 10}}
        />
      </View>
      <View style={{marginTop: 10}}>
        <FlatList
          data={data}
          keyExtractor={item => item?.id}
          renderItem={({item, index}) => {
            return (
              <View>
                <MessageComponent item={item} />
              </View>
            );
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
  },
  searchInput: {
    height: 45,
    width: DIMENSIONS.width - 80,
    borderRadius: 30,
    padding: 10,
    fontSize: 12,
    borderWidth: 0,
    ...FONT.title,
    paddingHorizontal: 10,
  },
});
