import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import HomeAppointmentCard from '../components/HomeAppointmentCard';
import {MyAppointmentCard} from '../components/MyAppointmentCard';
import API from '../axios/api';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';
import Loader from '../components/Loader';
import ModalLoader from '../components/ModalLoader';

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

  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);
  const [loading, setLoading] = useState(true);

  const getMyAppointments = async () => {
    console.log('getMyAppointments patient');
    await API?.getMyAppointments(userId, parseInt(userType))
      .then(res => {
        // console.log(res?.data);
        setAppointments(res?.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(err => {
        console.log(err?.data?.message);
      });
  };

  const [reloader, setReloader] = useState(false);

  useEffect(() => {
    getMyAppointments();
  }, [reloader]);

  const [deleteLoader, setDeleteLoader] = useState(false);

  return (
    <Container style={{marginTop: 0}}>
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
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
      </View>
      {/* --------------------------------------------------card-------------------------------------------------------- */}
      <Loader
        loading={loading}
        uri={require('../assets/Lottie/chatLoader.json')}
      />
      <FlatList
        data={appointments}
        keyExtractor={item => item?._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <>
              {userId == item?.patientId && (
                <MyAppointmentCard
                  item={item}
                  reloader={reloader}
                  setReloader={setReloader}
                  deleteLoader={deleteLoader}
                  setDeleteLoader={setDeleteLoader}
                />
              )}
            </>
          );
        }}
      />
      <View style={{height: 100}}></View>
      <ModalLoader loading={deleteLoader} />
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
    width: DIMENSIONS.width - 20,
    alignSelf: 'center',
    elevation: 5,
    shadowColor: COLORS.blue,
    padding: 5,
    marginBottom: 10,
  },
  appointmentTypeButton: {
    padding: 10,
    width: (DIMENSIONS?.width - 20) / 3,
    borderRadius: 5,
    alignItems: 'center',
  },
});
