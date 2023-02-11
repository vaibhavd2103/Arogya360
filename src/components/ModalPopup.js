import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {CheckCircleIcon, Text} from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from './Buttons';

const ModalPopup = ({heading, title, subtitle, error, onPress, source}) => {
  return (
    <View
      style={{
        padding: 24,
        width: '90%',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: 'white',
        elevation: 15,
      }}>
      {source ? (
        <Image
          alt="img"
          source={source}
          style={{height: 100, width: 100, marginTop: 10}}
          resizeMode="contain"
        />
      ) : null}

      {!error ? (
        <MaterialCommunityIcons
          name="check-decagram"
          size={100}
          color="#41C788"
          style={{
            elevation: 20,
            shadowColor: `#41C788cc`,
            shadowOpacity: 0.2,
          }}
        />
      ) : null}

      <Text color={error ? '#C9234A' : '#41C788'} fontSize={20} mt={6}>
        {heading}
      </Text>
      <Text
        color={error ? '#C9234A' : '#41C788'}
        fontSize={20}
        maxW={'90%'}
        textAlign="center"
        mt={1}>
        {title}
      </Text>
      <Text
        color="#6D7A9B"
        fontSize={15}
        maxW={'100%'}
        textAlign="center"
        mt={5}>
        {subtitle}
      </Text>
      <Button
        title={error ? 'Back' : 'Continue'}
        style={{width: '50%', marginTop: 15}}
        onPress={onPress}
      />
    </View>
  );
};

export default ModalPopup;

const styles = StyleSheet.create({});
