import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RoundedButton} from './Buttons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const MyAppointmentCard = ({item, index, length}) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.cardDetails}>
        <View>
          <Image source={{uri: item?.profile_photo}} style={styles.cardImage} />
          <Text style={styles.cardText}>{item?.doctor}</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name="checksquareo"
              size={18}
              color={COLORS.light_black}
              style={{marginRight: 0, top: 2}}
            />
            <Text
              style={{
                ...FONT?.title,
                color: COLORS.light_black,
                marginBottom: 0,
              }}>
              {' - '}
            </Text>
            <Text
              style={{
                ...FONT?.title,
                color: COLORS.light_black,
                maxWidth: DIMENSIONS?.width - 220,
                marginBottom: 5,
              }}>
              {item?.reason}
            </Text>
          </View>
          <Text
            style={{
              ...FONT?.title,
              color: COLORS.light_black,
              marginBottom: 5,
            }}>
            <AntDesign
              name="calendar"
              size={18}
              color={COLORS.light_black}
              style={{marginRight: 10, top: 2}}
            />
            {' - '}
            {item?.date}
          </Text>
          <Text
            style={{
              ...FONT?.title,
              color: COLORS.light_black,
              marginBottom: 0,
            }}>
            <AntDesign
              name="clockcircleo"
              size={18}
              color={COLORS.light_black}
              style={{marginRight: 10, top: 2}}
            />
            {' - '}
            {item?.time}
          </Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#E9E8F1'}}>
          <Text style={{...styles.buttonText, color: COLORS.light_black}}>
            Cancel
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reschedule</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrMyAppointmentCard = ({item, index, length, type}) => {
  return (
    <View style={styles.cardView}>
      <View
        style={{
          ...styles.cardDetails,
          marginBottom: 0,
          // backgroundColor: 'pink',
        }}>
        <View>
          <Image source={{uri: item?.profile_photo}} style={styles.cardImage} />
          <Text style={styles.cardText}>{item?.doctor}</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name="checksquareo"
              size={18}
              color={COLORS.light_black}
              style={{marginRight: 0, top: 2}}
            />
            <Text
              style={{
                ...FONT?.title,
                color: COLORS.light_black,
                marginBottom: 0,
              }}>
              {' - '}
            </Text>
            <Text
              style={{
                ...FONT?.title,
                color: COLORS.light_black,
                maxWidth: DIMENSIONS?.width - 220,
                marginBottom: 5,
              }}>
              {item?.reason}
            </Text>
          </View>
          <Text
            style={{
              ...FONT?.title,
              color: COLORS.light_black,
              marginBottom: 5,
            }}>
            <AntDesign
              name="calendar"
              size={18}
              color={COLORS.light_black}
              style={{marginRight: 10, top: 2}}
            />
            {' - '}
            {item?.date}
          </Text>
          <Text
            style={{
              ...FONT?.title,
              color: COLORS.light_black,
              marginBottom: 0,
            }}>
            <AntDesign
              name="clockcircleo"
              size={18}
              color={COLORS.light_black}
              style={{marginRight: 10, top: 2}}
            />
            {' - '}
            {item?.time}
          </Text>
        </View>
      </View>

      {type == 'upcomming' && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginLeft: 15,
            // backgroundColor: 'pink',
            width: '100%',
          }}>
          <RoundedButton
            icon={<Entypo name="cross" size={24} color={COLORS.grey} />}
            // onPress={onCancel}
            style={{
              alignSelf: 'flex-end',
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: 'white',
              elevation: 5,
            }}
          />
          <RoundedButton
            icon={<Feather name="check" size={24} color={COLORS.background} />}
            // onPress={onAccept}
            style={{
              alignSelf: 'flex-end',
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: COLORS.blue,
              elevation: 5,
            }}
          />
        </View>
      )}
      {type == 'completed' && (
        <View
          style={{
            ...styles.buttonView,
            // alignItems: 'flex-end',
            width: '100%',
            // backgroundColor: 'orange',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: COLORS.blue,
              alignSelf: 'flex-end',
            }}>
            <Text style={styles.buttonText}>Completed</Text>
          </TouchableOpacity>
        </View>
      )}
      {type == 'cancled' && (
        <View
          style={{
            ...styles.buttonView,
            // alignItems: 'flex-end',
            width: '100%',
            // backgroundColor: 'orange',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: COLORS.lightRed,
              alignSelf: 'flex-end',
            }}>
            <Text style={styles.buttonText}>Canceled</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export {MyAppointmentCard, DrMyAppointmentCard};

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.blue,
    width: '48%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    ...FONT.title,
    color: COLORS.white,
  },
  cardView: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: DIMENSIONS?.width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    elevation: 20,
    shadowColor: '#000',
  },
  cardDetails: {
    flexDirection: 'row',
    width: DIMENSIONS?.width - 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  cardText: {
    ...FONT?.title,
    color: COLORS.light_black,
    maxWidth: 100,
    textAlign: 'center',
  },
});
