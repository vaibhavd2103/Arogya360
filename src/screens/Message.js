import {StyleSheet, TextInput, View, FlatList} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import CustomHeader from '../components/CustomHeader';
import Search from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
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
const Message = ({navigation}) => {
  return (
    <Container>
      <CustomHeader
        title={'Messages'}
        RightIcon={() => {
          return <FontAwesome5 name="robot" size={24} color={COLORS.blue} />;
        }}
        onRightIconPress={() => {
          navigation.navigate(ROUTES.chattingBot);
        }}
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
          data={data}
          keyExtractor={item => item?.id}
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
