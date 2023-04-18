import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button, RoundedButton} from './Buttons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import API from '../axios/api';
import {useNavigation} from '@react-navigation/native';
import {AVATAR_KEY} from '../../config';
const MyAppointmentCard = ({
  item,
  index,
  length,
  reloader,
  setReloader,
  deleteLoader,
  setDeleteLoader,
}) => {
  const cancelAppointment = async () => {
    setDeleteLoader(true);
    const data = {
      appointmentId: item?._id,
    };
    await API?.deleteAppointment(data)
      .then(res => {
        setDeleteLoader(false);
        setReloader(!reloader);
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.cardView}>
      <View
        style={{
          ...styles.cardDetails,
          marginBottom: 0,
          // backgroundColor: 'pink',
        }}>
        <View>
          <Image
            source={{
              //  uri: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
              uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.user?.name}&background_color=003467&is_bold=true`,
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>{item?.user?.name}</Text>
          {/* {console.log('-->', typeof item?.user)} */}
        </View>
        <View style={{marginLeft: 20}}>
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
            {item?.appointmentDate}
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
            {item?.appointmentTime}
          </Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          onPress={cancelAppointment}
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

const DrMyAppointmentCard = ({item, index, length, type, userId}) => {
  let navigation = useNavigation();
  const createChatRoom = async () => {
    const data = {
      doctorId: userId,
      patientId: item?.user?._id,
      createdAt: new Date(),
    };
    await API?.createChatRoom(data)
      .then(res => {
        console.log('------------->', res?.data);
        const data = {
          __v: 0,
          _id: res?.data?.data?._id,
          user: item?.user,
        };

        navigation.navigate(ROUTES?.chat, data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.cardView}>
      <View
        style={{
          ...styles.cardDetails,
          marginBottom: 0,
          // backgroundColor: 'pink',
        }}>
        <View>
          <Image
            source={{
              //  uri: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
              uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.user?.name}&background_color=003467&is_bold=true`,
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>{item?.user?.name}</Text>
          {/* {console.log('-->', typeof item?.user)} */}
        </View>
        <View style={{marginLeft: 20}}>
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
            {item?.appointmentDate}
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
            {item?.appointmentTime}
          </Text>
        </View>
      </View>

      {type == 'upcomming' && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: 15,
            // backgroundColor: 'pink',
            width: '100%',
          }}>
          <Button
            title={'Message'}
            onPress={() => {
              createChatRoom();
            }}
            style={{
              width: DIMENSIONS?.width - 100,
              marginLeft: 0,
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
              backgroundColor: COLORS.green,
              alignSelf: 'flex-end',
            }}
            enabled={false}>
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
    width: '100%',
    padding: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#ff0',
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
