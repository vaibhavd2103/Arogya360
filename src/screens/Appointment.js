import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import HomeAppointmentCard from '../components/HomeAppointmentCard';
import MyAppointmentCard from '../components/MyAppointmentCard';

const Appointment = () => {
  // --------------------------------------useState-----------------------------------------
  const [appointmentType, setAppointmentType] = useState('upcoming');
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Vaibhav Dange',
      reason: 'Medical checkup for over fitness',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '2',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Tanya Thakur',
      reason: 'Medical checkup for over weight',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '3',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Someone here',
      reason: 'Medical checkup for over thinking',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '4',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Dr. Someone here',
      reason: 'Medical checkup for over thinking',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
  ]);

  return (
    <Container style={{marginTop: 10}}>
      {/* ----------------------------------------------------topTab--------------------------------------------------- */}
      <View style={styles.appointmentTopTab}>
        <TouchableOpacity
          onPress={() => {
            setAppointmentType('upcoming');
          }}
          style={{
            ...styles.appointmentTypeButton,
            backgroundColor:
              appointmentType === 'upcoming' ? COLORS.blue : '#fff',
          }}>
          <Text
            style={{
              ...FONT?.title,
              color:
                appointmentType === 'upcoming' ? '#fff' : COLORS.light_black,
            }}>
            Upcoming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAppointmentType('completed');
          }}
          style={{
            ...styles.appointmentTypeButton,
            backgroundColor:
              appointmentType === 'completed' ? COLORS.blue : '#fff',
          }}>
          <Text
            style={{
              ...FONT?.title,
              color:
                appointmentType === 'completed' ? '#fff' : COLORS.light_black,
            }}>
            Completed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setAppointmentType('cancelled');
          }}
          style={{
            ...styles.appointmentTypeButton,
            backgroundColor:
              appointmentType === 'cancelled' ? COLORS.blue : '#fff',
          }}>
          <Text
            style={{
              ...FONT?.title,
              color:
                appointmentType === 'cancelled' ? '#fff' : COLORS.light_black,
            }}>
            Cancelled
          </Text>
        </TouchableOpacity>
      </View>
      {/* --------------------------------------------------card-------------------------------------------------------- */}
      <FlatList
        data={appointments}
        keyExtractor={item => item?.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <>
              <MyAppointmentCard item={item} />
            </>
          );
        }}
      />
      <View style={{height: 100}}></View>
    </Container>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  appointmentTopTab: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: DIMENSIONS.width - 5,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: COLORS.blue,
    padding: 5,
    marginBottom: 10,
  },
  appointmentTypeButton: {
    padding: 10,
    width: '33.5%',
    borderRadius: 5,
    alignItems: 'center',
  },
});
