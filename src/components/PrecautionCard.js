import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';

const PrecautionCard = ({precaution, title}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS?.blue,
        width: DIMENSIONS?.width - 40,
        padding: 10,
        borderRadius: 10,
        elevation: 20,
        shadowColor: `${COLORS?.blue}`,
        marginHorizontal: 20,
      }}>
      <Text
        style={{
          ...FONT?.header,
          // textAlign: 'center',
          marginBottom: 5,
          color: '#fff',
        }}>
        Precaution Recommendation
      </Text>
      <Text
        style={{
          ...FONT?.title,
          elevation: 10,
          marginBottom: 5,
          color: '#fff',
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...FONT?.subTitle,
          elevation: 10,
          marginBottom: 5,
          color: '#fff',
        }}>
        {precaution}
      </Text>
    </View>
  );
};

export default PrecautionCard;

const styles = StyleSheet.create({});
