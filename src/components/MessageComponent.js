import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {AVATAR_KEY} from '../../config';
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
            //  uri: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.user?.name}&background_color=003467&is_bold=true`,
          }}
          style={{height: 60, width: 60, borderRadius: 60}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{...FONT.title}}>{item?.user?.name}</Text>
          <Text style={{...FONT.subTitle}}>{item?.lastMessage}</Text>
        </View>
      </View>
      <Text style={{...FONT.subTitle, fontSize: 10}}>
        {moment(item?.createdAt).format('hh:mm')}
      </Text>
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
