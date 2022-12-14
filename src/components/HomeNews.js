import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import NewsComponent from './NewsComponent';

const HomeNews = ({data}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            ...FONT?.header,
            color: COLORS?.grey,
          }}>
          News
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate(ROUTES?.article);
          }}>
          <Text
            style={{
              ...FONT?.title,
              color: COLORS?.light_black,
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        pagingEnabled
        snapToInterval={DIMENSIONS?.width - 29.88}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <NewsComponent item={item} index={index} length={data?.length} />
          );
        }}
      />
    </View>
  );
};

export default HomeNews;

const styles = StyleSheet.create({});
