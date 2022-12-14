import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
//---------------------constants--------------------
import Container from './../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/contants';
//---------------------icons--------------------
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Appointment = ({navigation, route}) => {
  const Types = [
    {
      id: '1',
      type: 'Family physicians',
      icon: <Fontisto name="doctor" size={24} color={COLORS.background} />,
      // onPress :
    },
    {
      id: '2',
      type: 'Gynecologists',
      icon: (
        <FontAwesome5
          name="baby-carriage"
          size={24}
          color={COLORS.background}
        />
      ),
      // onPress :
    },
    {
      id: '3',
      type: 'Neurologists',
      icon: <FontAwesome5 name="brain" size={24} color={COLORS.background} />,
      // onPress :
    },
    {
      id: '4',
      type: 'Cardiologists',
      icon: (
        <FontAwesome5 name="heartbeat" size={24} color={COLORS.background} />
      ),
      // onPress :
    },
    {
      id: '5',
      type: 'Dentist',
      icon: <FontAwesome5 name="tooth" size={24} color={COLORS.background} />,
      // onPress :
    },
  ];

  return (
    <Container style={{alignItems: 'center'}}>
      {/* <Text>Appointment</Text> */}
      <FlatList
        data={Types}
        keyExtractor={item => item.id}
        keyboardShouldPersistTaps="handled"
        ListFooterComponent={() => {
          return <View style={{height: 120}}></View>;
        }}
        renderItem={({item, index}) => {
          return <TypeItem item={item} index={index} navigation={navigation} />;
        }}
      />
    </Container>
  );
};

const TypeItem = ({item, index, navigation}) => {
  const [DrListOpen, setDrListOpen] = useState(false);
  const [id, setId] = useState('');
  counsellor = [
    {id: '1', name: 'Dr Sakshi', country: 'US'},
    {id: '2', name: 'Tanya', country: 'UK'},
    {id: '3', name: 'Tanisha', country: 'Uganda'},
    {id: '4', name: 'Vaibhav', country: 'China'},
  ];
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPressIn={() => setDrListOpen(!DrListOpen)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          {item.icon}
          <Text style={{...FONT.header, color: 'white', marginHorizontal: 10}}>
            {item?.type}
          </Text>
        </View>

        <MaterialIcons name="navigate-next" size={24} color="white" />
      </TouchableOpacity>
      {DrListOpen ? (
        <View style={{flex: 1}}>
          <FlatList
            data={counsellor}
            ListEmptyComponent={() => {
              return (
                <Text style={{...Font.title, color: 'white'}}>
                  Nothing found
                </Text>
              );
            }}
            style={{
              width: '100%',
              height: '100%',
              // paddingTop: 60,
            }}
            // ListHeaderComponent={flatListHeader}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <CounsellorInfo
                  navigation={navigation}
                  item={item}
                  id={id}
                  setId={setId}
                />
              );
            }}
            // ListFooterComponent={<View style={{height: 70}}></View>}
          />
        </View>
      ) : null}
    </>
  );
};

const CounsellorInfo = ({navigation, item, id, setId}) => {
  //   const [id, setId] = useState("");
  return (
    <TouchableOpacity
      style={{
        ...styles.counsellorContainer,
        backgroundColor:
          id === item.id ? 'rgba(137, 196, 244, 0.3)' : COLORS.blue,
        //    height: id === item.id ? 200 : 150,
      }}
      onPress={() => {
        setId(item.id);
      }}>
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
        }}
        style={{
          width: 70,
          height: 70,
          borderRadius: 60,
        }}
      />
      <Text
        style={{
          ...FONT.header,
          color: 'white',
          fontSize: 16,
        }}>
        Dr. {item.name.replace('Dr. ', '')}
      </Text>
      <Text
        style={{
          ...FONT.subTitle,
          color: COLORS.primary,
          paddingVertical: 2,
        }}>
        {item?.country ? item.country : 'Unknown'}
      </Text>
      <Text
        style={{
          ...FONT.subTitle,
          color: 'white',
        }}>
        MBBS
      </Text>

      <Text
        style={{
          ...FONT.subTitle,
          color: COLORS.background,
          paddingVertical: 2,
        }}>
        Clients 50+
      </Text>
      <TouchableOpacity
        style={styles.viewDetailsButton}
        onPress={() => {
          // navigation.navigate('CounsellorDetails', item);
        }}>
        <Text
          style={{
            ...FONT.subTitle,
            color: COLORS.yellow,
          }}>
          View Details
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.width - 50,
    // padding: 15,
    height: 80,
    backgroundColor: COLORS.yellow,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 26,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 26,
    padding: 10,
  },
  counsellorContainer: {
    width: DIMENSIONS.width / 2 - 50,
    //     elevation: 10,
    backgroundColor: '#1f1f1f',
    // paddingVertical: 10,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    //     marginBottom: 10,
  },
  viewDetailsButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.yellow,
    paddingVertical: 5,
    marginTop: 5,
  },
});
