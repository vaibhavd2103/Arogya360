import {ScrollView, StyleSheet, Text, View, Switch} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {COLORS, FONT} from '../constants/constants';
import {HStack} from 'native-base';
import {useState} from 'react';
import API from '../axios/api';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const MedicineTracker = () => {
  const data = [
    {
      id: '1',
      time: 'Morning',
      medicines: [
        {
          id: '1',
          name: 'Paracetamol',
          count: 1 / 2,
          time: 'Before Meal',
        },
        {
          id: '2',
          name: 'Vaibhav',
          count: 1,
          time: 'After Meal',
        },
        {
          id: '3',
          name: 'Dange',
          count: 1 / 2,
          time: 'After Meal',
        },
      ],
    },
    {
      id: '2',
      time: 'Afternoon',
      medicines: [
        {
          id: '1',
          name: 'Paracetamol',
          count: 1 / 2,
          time: 'Before Meal',
        },
        {
          id: '2',
          name: 'Vaibhav',
          count: 1,
          time: 'After Meal',
        },
        {
          id: '3',
          name: 'Dange',
          count: 1 / 2,
          time: 'After Meal',
        },
      ],
    },
    {
      id: '3',
      time: 'Evening',
      medicines: [
        {
          id: '1',
          name: 'Paracetamol',
          count: 1 / 2,
          time: 'Before Meal',
        },
        {
          id: '2',
          name: 'Vaibhav',
          count: 1 / 2,
          time: 'After Meal',
        },
        {
          id: '3',
          name: 'Dange',
          count: 1,
          time: 'After Meal',
        },
      ],
    },
  ];

  const [notification, setNotification] = useState(true);

  const userId = useSelector(state => state?.user_id);

  const [medicines, setMedicines] = useState([]);

  const getMyReport = async () => {
    await API.getMyReport(userId)
      .then(res => {
        // console.log(res?.data?.data?.medicines);
        setMedicines(res?.data?.data?.medicines);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyReport();
  }, []);

  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'flex-start',
          paddingHorizontal: 30,
        }}>
        <HStack
          alignItems="center"
          style={{
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONT?.title,
              marginTop: 30,
              marginBottom: 10,
            }}>
            Notification reminder for medicines
          </Text>
          <Switch
            value={notification}
            onValueChange={() => {
              setNotification(!notification);
            }}
            trackColor={COLORS?.blue}
            thumbColor={COLORS?.blue}
            style={{
              top: 10,
              elevation: 20,
            }}
          />
        </HStack>
        {data?.map(item => {
          return (
            <View key={item?.id}>
              <Text
                style={{
                  ...FONT?.title,
                  fontSize: 18,
                  color: COLORS?.blue,
                  marginTop: 30,
                  marginBottom: 10,
                }}>
                {item?.time} :
              </Text>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <Text
                  style={{
                    ...FONT?.title,
                    color: COLORS?.green,
                    marginBottom: 10,
                    // marginLeft: 20,
                    flex: 1.5,
                    fontSize: 14,
                  }}>
                  Medicine name
                </Text>

                {/* <Text
                  style={{
                    ...FONT?.title,
                    color: COLORS?.green,
                    marginBottom: 10,
                    // marginLeft: 20,
                    flex: 1,
                    fontSize: 14,
                  }}>
                  Time
                </Text> */}
              </View>
              {medicines?.map(med => {
                return (
                  <View
                    key={med?.medicineName}
                    style={{flexDirection: 'row', width: '100%'}}>
                    {med?.medicineTime?.findIndex(time => time == item?.time) >
                      -1 && (
                      <Text
                        style={{
                          ...FONT?.title,
                          color: COLORS?.grey,
                          marginBottom: 10,
                          // marginLeft: 20,
                          flex: 1.5,
                        }}>
                        {med?.medicineName}
                      </Text>
                    )}

                    {/* <Text
                      style={{
                        ...FONT?.subTitle,
                        color: COLORS?.grey,
                        marginBottom: 10,
                        // marginLeft: 20,
                        flex: 1,
                      }}>
                      {med?.medicineTime}
                    </Text> */}
                  </View>
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default MedicineTracker;

const styles = StyleSheet.create({});
