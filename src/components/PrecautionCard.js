import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';

const PrecautionCard = ({precaution}) => {
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
          textAlign: 'center',
          marginBottom: 5,
          color: '#fff',
        }}>
        Precaution Recommendation
      </Text>
      <Text style={{...FONT?.subTitle, color: '#fff', elevation: 10}}>
        {precaution}
      </Text>
    </View>
  );
};

export default PrecautionCard;

const styles = StyleSheet.create({});
