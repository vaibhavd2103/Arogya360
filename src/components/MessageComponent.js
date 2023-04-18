import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

const MessageComponent = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.MessageComponentCard}
      onPress={() => {
        navigation.navigate(ROUTES.chat, item);
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri: 'https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-03-scaled.jpeg',
          }}
          style={{height: 60, width: 60, borderRadius: 60}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{...FONT.title}}>{item?.user?.name}</Text>
          <Text style={{...FONT.subTitle}}>{item?.lastMessage}</Text>
        </View>
      </View>
      <Text style={{...FONT.subTitle, fontSize: 10}}>{ moment(item?.createdAt).format('hh:mm') }</Text>
    </TouchableOpacity>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  MessageComponentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // marginTop: 5,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    width: DIMENSIONS.width - 30,
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 10,
    paddingVertical: 5,
    marginTop: 10,
    shadowColor: '#0007',
  },
});
