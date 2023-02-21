import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import Input from './TextInput';
import {TextInput} from 'react-native';
import {FlatList} from 'react-native';

const Bmi = () => {
  const bmiChart = [
    {
      id: '1',
      name: 'Underweight',
      value: 'BMI is less than 18.5',
    },
    {
      id: '2',
      name: 'Normal weight',
      value: 'BMI is 18.5 to 24.9',
    },
    {
      id: '3',
      name: 'Overweight',
      value: 'BMI is 25 to 29.9',
    },
    {
      id: '4',
      name: 'Obese',
      value: 'BMI is 30 or more',
    },
  ];
  const [err, setErr] = useState({
    height: '',
    weight: '',
  });
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [cal, setCal] = useState();

  const validate = () => {
    if (height === '') {
      setErr({...err, height: 'Height cannot be empty'});
    } else if (weight === '') {
      setErr({...err, weight: 'Weight cannot be empty'});
    } else {
      calculate();
    }
  };

  const calculate = () => {
    const val = weight / (height * height);
    setCal(val);
    console.log('calculated BMI', val);
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 7,
        }}>
        <Text style={{...FONT.title, paddingRight: 15}}>Height:*</Text>
        <TextInput
          placeholder="Enter your Height"
          placeholderTextColor={'grey'}
          style={{
            height: 45,
            width: DIMENSIONS.width - 250,
            backgroundColor: COLORS.background,
            borderRadius: 10,
            padding: 10,
            fontSize: 12,
            // borderWidth: err ? 1 : 0,
            borderColor: COLORS.error,
            ...FONT.title,
            elevation: 10,

            //   shadowColor: err ? `${COLORS.error}aa` : `${COLORS.blue}cc`,
          }}
          keyboardType={'number-pad'}
          onChangeText={val => {
            setHeight(val);
            setCal(null);
            setErr({...err, height: ''});
          }}
          value={height}
          err={err.height}
        />

        <Text style={{...FONT.subTitle, paddingLeft: 5}}>
          (Enter you height in meter)
        </Text>
      </View>
      {err?.height && (
        <Text
          style={{
            ...FONT.subTitle,
            color: COLORS.error,
            fontSize: 12,
          }}>
          {err.height}
        </Text>
      )}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{...FONT.title, paddingRight: 10}}>Weight:*</Text>
        <TextInput
          placeholder="Enter your Weight"
          placeholderTextColor={'grey'}
          style={{
            height: 45,
            width: DIMENSIONS.width - 250,
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 10,
            fontSize: 12,
            // borderWidth: err ? 1 : 0,
            borderColor: COLORS.error,
            ...FONT.title,
            elevation: 10,

            //   shadowColor: err ? `${COLORS.error}aa` : `${COLORS.blue}cc`,
          }}
          keyboardType={'number-pad'}
          onChangeText={val => {
            setWeight(val);
            setCal(null);
            setErr({...err, weight: ''});
          }}
          value={weight}
          err={err.weight}
        />

        <Text style={{...FONT.subTitle, paddingLeft: 5}}>
          (Enter you weight in kg)
        </Text>
      </View>
      {err?.weight && (
        <Text
          style={{
            ...FONT.subTitle,
            color: COLORS.error,
            fontSize: 12,
            paddingLeft: 30,
          }}>
          {err.weight}
        </Text>
      )}

      {cal && (
        <View style={{paddingTop: 10}}>
          <View
            style={{
              alignItems: 'center',
              // paddingLeft: 25,
              flexDirection: 'row',
              paddingTop: 10,
            }}>
            <Text style={{...FONT.title, paddingRight: 15}}>Your BMI:</Text>
            <Text
              style={{
                height: 50,
                width: DIMENSIONS.width - 250,
                backgroundColor: '#fff',
                borderRadius: 10,
                padding: 10,
                fontSize: 12,
                ...FONT.title,
                elevation: 5,
                borderWidth: 1,
                borderColor: COLORS.green,
              }}>
              {cal}
            </Text>
          </View>
        </View>
      )}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 50,
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 100,
            backgroundColor: COLORS.green,
            borderRadius: 15,
            elevation: 10,
          }}
          activeOpacity={0.7}
          onPress={() => {
            validate();
          }}>
          <Text
            style={{
              ...FONT.title,

              padding: 15,
              textAlign: 'center',
            }}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={bmiChart}
        keyExtractor={item => item?.id}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'space-between',
                paddingVertical: 2,
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  width: '50%',
                  backgroundColor: COLORS.green,
                  justifyContent: 'space-between',
                  paddingRight: 10,
                }}>
                <Text style={{...FONT.title, padding: 12, color: COLORS.blue}}>
                  {item.name}
                </Text>
              </View>
              <View style={{backgroundColor: '#E2E2E2', width: '50%'}}>
                <Text
                  style={{
                    ...FONT.title,
                    padding: 12,
                    color: COLORS.blue,
                  }}>
                  {item.value}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Bmi;

const styles = StyleSheet.create({});
