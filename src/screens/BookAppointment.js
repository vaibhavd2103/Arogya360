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
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, RoundedButton} from '../components/Buttons';
import ModalPopup from '../components/ModalPopup';
import {Modal} from 'native-base';

const BookAppointment = ({navigation, route}) => {
  const [calType, setCalType] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const item = route.params.item;
  console.log(item);
  const [selectedTime, setSelectedTime] = useState('');
  const [successModal, setSuccessModal] = useState(false);

  const Time = [
    {
      id: '1',
      time: '10 AM - 11 AM',
      booked: true,
    },
    {
      id: '2',
      time: '11 AM - 12 PM',
      booked: false,
    },
    {
      id: '3',
      time: '1 PM - 2 PM',
      booked: false,
    },
    {
      id: '4',
      time: '2 AM - 3 AM',
      booked: true,
    },
    {
      id: '5',
      time: '3 AM - 4 AM',
      booked: false,
    },
    {
      id: '6',
      time: '4 AM - 5 AM',
      booked: false,
    },
  ];

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
            backgroundColor: 'white',
            //   height: 160,
            backgroundColor: `#ECDCBC`,
          }}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
            }}
            style={{
              width: DIMENSIONS.width / 4,
              height: 140,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              flexGrow: 1,
              height: 140,
              padding: 15,
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
              Consultant. Psychiatry
            </Text>

            <Text
              style={{
                ...FONT.subTitle,

                paddingVertical: 2,
              }}>
              Clients : 50+
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
              calendarHeaderStyle={{color: COLORS.grey}}
              dateNumberStyle={{color: COLORS.grey}}
              iconContainer={{flex: 0.1}}
              dateNameStyle={{color: COLORS.grey}}
              selectedDate={selectedDate}
              highlightDateNameStyle={{color: COLORS.blue}}
              highlightDateNumberStyle={{color: COLORS.blue}}
              onDateSelected={val => setSelectedDate(val)}
            />
          </View>
        ) : (
          <View style={{marginTop: 15}}>
            <Calendar
              onDayPress={day => setSelectedDate(new Date(day.dateString))}
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
        <View style={{height: 180}}>
          <FlatList
            data={Time}
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap-reverse',
            }}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    ...styles.timeCard,

                    backgroundColor: item?.booked
                      ? 'red'
                      : selectedTime == item?.time
                      ? COLORS.lightBlue
                      : COLORS.yellow,
                    elevation: selectedTime === item.time ? 5 : 0,
                  }}
                  disabled={item?.booked}
                  onPress={() => setSelectedTime(item.time)}>
                  <Text
                    style={{
                      ...FONT.title,
                    }}>
                    {item?.time}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        {selectedTime ? (
          <Text style={{...FONT.title}}>
            {`You have selected time ${selectedTime} on date ${selectedDate} please confirm your booking`}
          </Text>
        ) : null}
        <Button
          disabled={selectedTime ? false : true}
          title={'Confirm Booking'}
          onPress={() => setSuccessModal(true)}
          style={{marginTop: 15}}
        />

        <Modal
          isOpen={successModal}
          onClose={() => setSuccessModal(false)}
          style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
          <ModalPopup
            // source={require('../assets/images/success.png')}
            error={false}
            heading={'Congratulations!'}
            // title="Successful"
            subtitle={'Your Appointment is Booked'}
            onPress={() => {
              setSuccessModal(false);
              // navigation.goBack();
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
    height: 35,
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
