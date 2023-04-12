import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import HomeAppointmentCard from '../components/HomeAppointmentCard';
import {
  DrMyAppointmentCard,
  MyAppointmentCard,
} from '../components/MyAppointmentCard';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import API from '../axios/api';
import {useEffect} from 'react';

const Tab = createMaterialTopTabNavigator();

const DrAppoitments = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12, textTransform: 'none'},
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: '#9098ac',
        tabBarIndicatorContainerStyle: {
          backgroundColor: 'pink',
          width: '100%',
        },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.blue,
        },
      }}
      keyboardDismissMode="on-drag">
      <Tab.Screen name={'Upcomming'} component={Upcomming} />
      <Tab.Screen name={'Completed'} component={Completed} />
    </Tab.Navigator>
  );
};

export default DrAppoitments;

const Upcomming = () => {
  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);

  const getMyAppointments = async () => {
    console.log('getMyAppointments');
    await API?.getMyAppointments(userId, parseInt(userType))
      .then(res => {
        console.log(res?.data);
        setAppointments(res?.data);
      })
      .catch(err => {
        console.log(err?.data?.message);
      });
  };

  useEffect(() => {
    getMyAppointments();
  }, []);
  const [appointments, setAppointments] = useState([]);
  return (
    <Container>
      <FlatList
        data={appointments}
        keyExtractor={item => item?._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <DrMyAppointmentCard
              item={item}
              type={'upcomming'}
              userId={userId}
            />
          );
        }}
      />
    </Container>
  );
};

const Completed = () => {
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Vaibhav Dange',
      reason: 'Medical checkup for over fitness',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '2',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Tanya Thakur',
      reason: 'Medical checkup for over weight',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '3',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Someone here',
      reason: 'Medical checkup for over thinking',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
    {
      id: '4',
      date: '21/03/2023',
      time: '3:00 PM',
      doctor: 'Someone here',
      reason: 'Medical checkup for over thinking',
      profile_photo:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    },
  ]);

  return (
    <Container>
      <FlatList
        data={appointments}
        keyExtractor={item => item?.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <DrMyAppointmentCard item={item} type="completed" />;
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});
