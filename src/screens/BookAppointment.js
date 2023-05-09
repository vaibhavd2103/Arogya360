import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import CalendarStrip from 'react-native-calendar-strip';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, RoundedButton} from '../components/Buttons';
import ModalPopup from '../components/ModalPopup';
import {Modal} from 'native-base';
import axios from 'axios';
import API from '../axios/api';
import {useSelector} from 'react-redux';
import {AVATAR_KEY} from '../../config';

const BookAppointment = ({navigation, route}) => {
  const [calType, setCalType] = useState(true);
  const [selectedDate, setSelectedDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );
  const item = route?.params?.item;
  // console.log(item);
  const [selectedTime, setSelectedTime] = useState('');
  const [successModal, setSuccessModal] = useState(false);
  const userType = useSelector(state => state?.userType);
  const userId = useSelector(state => state?.user_id);

  const Time = [
    {
      id: '1',
      time: '5 PM - 6 PM',
      booked: true,
    },
    {
      id: '2',
      time: '4 PM - 5 PM',
      booked: false,
    },
    {
      id: '3',
      time: '3 PM - 4 PM',
      booked: false,
    },
    {
      id: '4',
      time: '2 PM - 3 PM',
      booked: true,
    },
    {
      id: '5',
      time: '1 PM - 2 PM',
      booked: false,
    },
    {
      id: '6',
      time: '12 PM - 1 PM',
      booked: false,
    },
    {
      id: '7',
      time: '11 PM - 12 PM',
      booked: false,
    },
    {
      id: '8',
      time: '10 PM - 11 PM',
      booked: true,
    },
  ];

  const [bookedAppointments, setBookedAppointments] = useState([]);

  const getMyAppointments = async () => {
    await API.getBookedAppointments(item?._id)
      .then(res => {
        // console.log('---------------->', item?._id, 2, res?.data);
        setBookedAppointments(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      // console.log(
      //   'userId',
      //   userId,
      //   'doctorId',
      //   item?._id,
      //   selectedTime,
      //   selectedDate,
      // );
      setSelectedTime('');
      setSelectedDate(moment(new Date()).format('YYYY-MM-DD'));
      getMyAppointments();
    });
  }, [selectedDate, navigation]);

  const bookAppointment = async () => {
    const data = {
      doctorId: item?._id,
      patientId: userId,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
    };
    await API.bookAppointment(data)
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.background,
        width: '100%',
        height: '100%',
      }}>
      <Container style={{padding: 24}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `#ECDCBC`,
            padding: 10,
            borderRadius: 10,
          }}>
          <Image
            source={{
              uri: item?.avatar_url
                ? item?.avatar_url
                : `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.name}&background_color=003467&is_bold=true`,
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              flexGrow: 1,
              // height: 100,
              paddingLeft: 15,
            }}>
            <Text
              style={{
                ...FONT.header,
                fontSize: 16,
              }}>
              Dr. {item.name.replace('Dr ' || 'DR. ', '')}
            </Text>
            <Text
              style={{
                ...FONT.subTitle,

                paddingVertical: 2,
              }}>
              Country: {item?.country ? item.country : 'Unknown'}
            </Text>
            <Text
              style={{
                ...FONT.subTitle,
              }}>
              Specialty : {item?.specialty}
            </Text>

            <Text
              style={{
                ...FONT.subTitle,

                paddingVertical: 2,
              }}>
              Gender : {item?.gender}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text style={{...FONT.header}}>
            {calType ? 'Weekly View' : 'Monthly View'}
          </Text>
          <RoundedButton
            onPress={() => setCalType(!calType)}
            icon={<FontAwesome5 name="calendar-week" size={24} color="white" />}
          />
        </View>
        {calType ? (
          <View style={{marginTop: 5}}>
            <CalendarStrip
              scrollable
              calendarColor={COLORS.background}
              style={{height: 90, paddingVertical: 5}}
              calendarHeaderStyle={{
                ...FONT?.header,
                color: '#000',
                fontSize: 14,
              }}
              dateNumberStyle={{color: COLORS.grey}}
              iconContainer={{flex: 0.1}}
              dateNameStyle={{color: COLORS.grey}}
              selectedDate={selectedDate}
              highlightDateNameStyle={{color: COLORS.green}}
              highlightDateNumberStyle={{color: COLORS.green}}
              onDateSelected={val => {
                setSelectedDate(moment(val).format('YYYY-MM-DD'));
                // console.log(moment(val).format('YYYY-MM-DD'));
                console.log(typeof `${moment(val).format('YYYY-MM-DD')}`);
                const date = new Date();
                // console.log(JSON.stringify(date));
              }}
            />
          </View>
        ) : (
          <View style={{marginTop: 15}}>
            <Calendar
              initialDate={selectedDate.toString()}
              // onDayPress={day => setSelectedDate(new Date(day.dateString))}
              onDayPress={day => {
                setSelectedDate(day?.dateString);
                console.log(day?.dateString);
              }}
              // current={new Date()}
              horizontal={true}
              markingType={'custom'}
              markedDates={{
                [moment(selectedDate).format('YYYY-MM-DD')]: {
                  customStyles: {
                    container: {
                      backgroundColor: COLORS.blue,
                    },
                    text: {color: COLORS.background, fontWeight: 'bold'},
                  },
                },
              }}
            />
          </View>
        )}

        <Text
          style={{
            ...FONT.title,
          }}>
          Select Schedule Time
        </Text>
        <View
          style={{height: 180, flexWrap: 'wrap', width: DIMENSIONS.width - 60}}>
          {Time?.reverse()?.map(item => {
            let booked =
              bookedAppointments?.findIndex(
                data =>
                  data?.appointmentTime == item?.time &&
                  data?.appointmentDate == selectedDate,
              ) > -1;
            return (
              <TouchableOpacity
                key={item?.id}
                style={{
                  ...styles.timeCard,
                  backgroundColor:
                    booked &&
                    bookedAppointments?.findIndex(
                      data => data?.patientId == userId,
                    ) > -1
                      ? `${COLORS?.green}aa`
                      : booked
                      ? `${COLORS?.error}aa`
                      : selectedTime === item.time
                      ? `${COLORS?.green}aa`
                      : `${COLORS?.yellow}aa`,
                  elevation: selectedTime === item.time ? 10 : 0,
                  shadowColor: booked
                    ? `${COLORS?.error}`
                    : selectedTime == item?.time
                    ? COLORS.green
                    : COLORS.yellow,
                }}
                disabled={booked}
                onPress={() => setSelectedTime(item.time)}>
                <Text
                  style={{
                    ...FONT.title,
                  }}>
                  {booked ? 'Booked' : item?.time}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {selectedTime ? (
          <Text style={{...FONT.title}}>
            You have selected time{' '}
            <Text style={{...FONT.header, fontSize: 14}}> {selectedTime}</Text>{' '}
            on date
            <Text style={{...FONT.header, fontSize: 14}}> {selectedDate}</Text>
            please confirm your booking
          </Text>
        ) : null}
        <Button
          disabled={selectedTime ? false : true}
          title={'Confirm Booking'}
          onPress={() => {
            bookAppointment();
            setSuccessModal(true);
          }}
          style={{marginTop: 15}}
        />

        {bookedAppointments?.findIndex(data => data?.patientId == userId) >
          -1 && (
          <Text style={{...FONT?.header}}>You have booked Appointment</Text>
        )}

        <Modal
          isOpen={successModal}
          onClose={() => setSuccessModal(false)}
          style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
          <ModalPopup
            // source={require('../assets/images/success.png')}
            error={false}
            heading={'Appointment Booked Successful'}
            // title="Successful"
            subtitle={'Doctor will contact you soon...'}
            onPress={() => {
              setSuccessModal(false);
              setSelectedDate(moment(new Date()).format('YYYY-MM-DD'));
              setSelectedTime('');
              navigation.goBack();
            }}
          />
        </Modal>
      </Container>
    </ScrollView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  timeCard: {
    height: 40,
    //     width: Sizes.width / 3 - 40,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 5,
    padding: 10,
  },
});
