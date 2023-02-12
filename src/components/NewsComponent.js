import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';

const NewsComponent = ({item, index, length}) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS?.white,
        width: DIMENSIONS?.width - 60,
        marginLeft: index == 0 ? 20 : 10,
        marginRight: index == length - 1 ? 20 : 0,
        marginBottom: 20,
        elevation: 10,
        shadowColor: `${COLORS?.blue}`,
        marginTop: 10,
      }}>
      <Text style={{...FONT?.title}}>{item?.title}</Text>
      <Image
        source={{uri: item?.urlToImage}}
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          marginVertical: 10,
        }}
      />
      <Text style={{...FONT?.subTitle, marginTop: 0}}>{item?.description}</Text>
    </View>
  );
};

export default NewsComponent;

const styles = StyleSheet.create({});
