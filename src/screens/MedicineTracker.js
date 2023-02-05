import {ScrollView, StyleSheet, Text, View, Switch} from 'react-native';
import React from 'react';
import Container from '../components/Container';
import {COLORS, FONT} from '../constants/constants';
import {HStack} from 'native-base';
import {useState} from 'react';

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
                <Text
                  style={{
                    ...FONT?.title,
                    color: COLORS?.green,
                    marginBottom: 10,
                    // marginLeft: 20,
                    flex: 0.5,
                    fontSize: 14,
                  }}>
                  Count
                </Text>
                <Text
                  style={{
                    ...FONT?.title,
                    color: COLORS?.green,
                    marginBottom: 10,
                    // marginLeft: 20,
                    flex: 1,
                    fontSize: 14,
                  }}>
                  Time
                </Text>
              </View>
              {item?.medicines?.map(med => {
                return (
                  <View
                    key={med?.id}
                    style={{flexDirection: 'row', width: '100%'}}>
                    <Text
                      style={{
                        ...FONT?.subTitle,
                        color: COLORS?.grey,
                        marginBottom: 10,
                        // marginLeft: 20,
                        flex: 1.5,
                      }}>
                      {med?.name}
                    </Text>
                    <Text
                      style={{
                        ...FONT?.subTitle,
                        color: COLORS?.grey,
                        marginBottom: 10,
                        // marginLeft: 20,
                        flex: 0.5,
                      }}>
                      {med?.count}
                    </Text>
                    <Text
                      style={{
                        ...FONT?.subTitle,
                        color: COLORS?.grey,
                        marginBottom: 10,
                        // marginLeft: 20,
                        flex: 1,
                      }}>
                      {med?.time}
                    </Text>
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
