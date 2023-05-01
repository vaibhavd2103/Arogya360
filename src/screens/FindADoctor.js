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
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
//---------------------icons--------------------
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../components/TextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import API from '../axios/api';
import {useNavigation} from '@react-navigation/native';
import {AVATAR_KEY} from '../../config';

const FindADoctor = ({navigation, route}) => {
  const [doctors, setDoctors] = useState([]);

  const getAllDoctors = async () => {
    await API.getAllDoctors().then(res => {
      // console.log(res?.data);
      setDoctors(res?.data?.doctors);
    });
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  const [search, setSearch] = useState('');

  return (
    <Container style={{alignItems: 'center'}}>
      {/* <Text>FindADoctor</Text> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          elevation: 20,
          shadowColor: `${COLORS.blue}cc`,
          // shadowOpacity: 0.2,
          borderRadius: 10,
          marginVertical: 20,
          paddingRight: 20,
          width: DIMENSIONS.width - 60,
        }}>
        <Input
          placeholder="Search Doctor"
          onChangeText={text => setSearch(text)}
          value={search}
          width={DIMENSIONS.width - 100}
          style={{elevation: 0, paddingLeft: 10}}
        />
        <Ionicons name="search" size={24} color={COLORS.blue} />
      </View>
      <FlatList
        data={doctors}
        numColumns={2}
        keyExtractor={item => item?._id}
        keyboardShouldPersistTaps="handled"
        ListFooterComponent={() => {
          return <View style={{height: 120}}></View>;
        }}
        renderItem={({item, index}) => {
          return <DoctorCard item={item} />;
        }}
      />
    </Container>
  );
};

const DoctorCard = ({item, id, setId}) => {
  //   const [id, setId] = useState("");
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        ...styles.counsellorContainer,
        // backgroundColor: `${COLORS?.yellow}`,

        backgroundColor: COLORS.lightBlue,
        //    height: id === item.id ? 200 : 150,
      }}
      onPress={() => {
        navigation.navigate(ROUTES.doctorsProfile, {item: item});
      }}>
      <Image
        source={{
          uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.name}&background_color=003467&is_bold=true`,
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
          color: COLORS.lead,
          fontSize: 16,
        }}>
        Dr. {item?.name?.replace('Dr.', '')}
      </Text>
      <Text
        style={{
          ...FONT.subTitle,
          color: COLORS.lead,
          paddingVertical: 2,
        }}>
        {item?.country ? item?.country : 'Unknown'}
      </Text>
      <Text
        style={{
          ...FONT.subTitle,
          color: COLORS.lead,
        }}>
        {item?.qualification}
      </Text>

      <Text
        style={{
          ...FONT.subTitle,
          color: COLORS.lead,
          paddingVertical: 2,
        }}>
        {item?.specialty}
      </Text>
      <TouchableOpacity
        style={styles.viewDetailsButton}
        onPress={() => {
          navigation.navigate(ROUTES.doctorsProfile, {item: item});
        }}>
        <Text
          style={{
            ...FONT.subTitle,
            color: COLORS.white,
          }}>
          View Details
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default FindADoctor;

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.width - 60,
    // padding: 15,
    height: 80,
    backgroundColor: COLORS.blue,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    elevation: 20,
    shadowColor: `${COLORS.blue}cc`,
    marginHorizontal: 30,
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
    borderWidth: 0,
    borderColor: COLORS.yellow,
    paddingVertical: 5,
    marginTop: 5,
    backgroundColor: COLORS.blue,
  },
});
