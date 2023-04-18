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
import Loader from '../components/Loader';
import {useIsFocused} from '@react-navigation/native';

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

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getMyAppointments();
    }
  }, [isFocused]);

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <Loader
        loading={loading}
        uri={require('../assets/Lottie/chatLoader.json')}
      />
      <FlatList
        data={appointments}
        keyExtractor={item => item?._id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          var q = new Date();
          var m = q.getMonth() + 1;
          var d = q.getDay();
          var y = q.getFullYear();

          var date = new Date(y, m, d);
          var appointmentDate = new Date(item?.appointmentDate);
          return (
            <>
              {userId == item?.doctorId && (
                <DrMyAppointmentCard
                  item={item}
                  type={'upcomming'}
                  userId={userId}
                />
              )}
            </>
          );
        }}
      />
    </Container>
  );
};

const Completed = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);

  const getMyAppointments = async () => {
    console.log('getMyAppointments');
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

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      getMyAppointments();
    }
  }, [isFocused]);

  return (
    <Container>
      <FlatList
        data={appointments}
        keyExtractor={item => item?.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          var q = new Date();
          var m = q.getMonth() + 1;
          var d = q.getDay();
          var y = q.getFullYear();

          var date = new Date(y, m, d);
          var appointmentDate = new Date(item?.appointmentDate);
          console.log(date < appointmentDate);
          return (
            <>
              {userId == item?.doctorId && appointmentDate < date == true && (
                <DrMyAppointmentCard item={item} type="completed" />
              )}
            </>
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});
