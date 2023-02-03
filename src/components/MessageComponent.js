import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import {useNavigation} from '@react-navigation/native';

const MessageComponent = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      key={item.id}
      style={styles.MessageComponentCard}
      onPress={() => {
        navigation.navigate(ROUTES.chat);
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: item?.profilePhoto}}
          style={{height: 60, width: 60, borderRadius: 60}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{...FONT.title}}>{item?.userName}</Text>
          <Text style={{...FONT.subTitle}}>{item?.lastMessage}</Text>
        </View>
      </View>
      <Text style={{...FONT.subTitle, fontSize: 10}}>{item?.time}</Text>
    </TouchableOpacity>
  );
};

export default MessageComponent;

const styles = StyleSheet.create({
  MessageComponentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 5,
    padding: 10,

    alignItems: 'center',
    width: DIMENSIONS.width - 30,
    alignSelf: 'center',
    // borderRadius: 10,
  },
});
