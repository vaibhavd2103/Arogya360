import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
const RecordItem = ({item, index}) => {
  return (
    <View style={styles.container}>
      <View style={{height: 60, padding: 15}}>
        <Text style={{...FONT.header, color: 'white'}}>{item?.name}</Text>
        <Text style={{...FONT.subTitle, color: 'white'}}>{item?.date}</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 90,
          alignSlef: 'flex-end',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          padding: 15,
        }}>
        <Text style={{...FONT.header}}>{item?.name}</Text>
        <Text style={{...FONT.subTitle}}>{item?.website}</Text>
        <Text style={{...FONT.subTitle}}>{item?.phone}</Text>
      </View>
    </View>
  );
};

export default RecordItem;

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.width - 40,
    // padding: 15,
    // height: 150,
    backgroundColor: COLORS.blue,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 10,
    shadowColor: `${COLORS.blue}cc`,
    marginHorizontal: 30,
    alignSelf: 'center',
  },
});
