import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from './../components/Container';
import RecordItem from './../components/RecordItem';
const MyHistory = props => {
  const [data, setData] = useState([]);

  const Data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      date: '11/12/2020',

      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      date: '11/12/2020',

      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      date: '11/12/2020',

      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      date: '11/12/2020',

      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services',
      },
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      date: 'Lucio_Hettinger@annie.ca',

      phone: '(254)954-1289',
      website: 'demarco.info',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems',
      },
    },
  ];

  return (
    <Container style={{padding: 25}}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        keyboardShouldPersistTaps="handled"
        ListFooterComponent={() => {
          return <View style={{height: 120}}></View>;
        }}
        renderItem={({item, index}) => {
          return <RecordItem item={item} index={index} />;
        }}
      />
    </Container>
  );
};

export default MyHistory;

const styles = StyleSheet.create({});
