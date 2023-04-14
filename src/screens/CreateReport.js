import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import Input from '../components/TextInput';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {Button} from '../components/Buttons';
import DropDown from '../components/DropDown';
import {CheckIcon, Select, Actionsheet} from 'native-base';
import {MultiDropDownComp} from '../components/DropDownComp';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import API from '../axios/api';

const CreateReport = ({navigation, route}) => {
  const patient = route?.params?.patient;
  const chatRoomId = route?.params?.chatRoomId;

  // console.log('----------------->', patient, chatRoomId);

  const [fields, setFields] = useState({
    name: patient?.name,
    reasons: '',
    medicines: [],
    duration: '',
    age: patient?.dob,
    gender: patient?.gender,
    height: patient?.height,
    weight: patient?.weight,
    email: patient?.email,
    mobile: patient?.mobile,
    description: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    reasons: '',
    medicines: '',
    duration: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    email: '',
    mobile: '',
  });

  const medicalIssues = [
    {
      id: '1',
      reason: 'Cold',
    },
    {
      id: '2',
      reason: 'Cold',
    },
    {
      id: '3',
      reason: 'Cold',
    },
    {
      id: '4',
      reason: 'Cold',
    },
    {
      id: '5',
      reason: 'Cold',
    },
    {
      id: '6',
      reason: 'Cold',
    },
    {
      id: '7',
      reason: 'Cold',
    },
    {
      id: '8',
      reason: 'Cold',
    },
    {
      id: '9',
      reason: 'Cold',
    },
    {
      id: '10',
      reason: 'Cold',
    },
    {
      id: '12',
      reason: 'Cold',
    },
    {
      id: '13',
      reason: 'Cold',
    },
  ];
  const TimeValues = [
    {label: 'Morning', value: 'Morning'},
    {label: 'Afternoon', value: 'Afternoon'},
    {label: 'Evening', value: 'Evening'},
  ];

  const [medicineLength, setMedicineLength] = useState(1);
  const [medicines, setMedicines] = useState([]);
  const [reasons, setReasons] = useState([]);

  const [reasonSheet, setReasonSheet] = useState(false);
  const [medicineTimeSheet, setMedicineTimeSheet] = useState(false);

  const [medicineName, setMedicineName] = useState('');
  const [medicineTime, setMedicineTime] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      // console.log(medicines);
    } else {
      setMedicines([]);
    }
  }, [isFocused]);

  const userId = useSelector(state => state?.user_id);

  const sendMessage = async () => {
    const data = {
      senderId: userId,
      receiverId: patient?._id,
      chatRoomId: chatRoomId,
      createdAt: new Date(),
      messageType: 4,
      message: `Report : \n\n Name: ${fields?.name} \n Age: ${
        fields?.age
      } \n Gender: ${fields?.gender} \n Height: ${fields?.height} \n Weight: ${
        fields?.weight
      } \n\n Description: ${
        fields?.description
      } \n\n Medicines: ${medicines?.map(data => {
        return `${data?.medicineName} ${data?.medicineTime?.map(time => {
          return time;
        })} \n\t\t\t\t\t\t\t`;
      })}`,
    };
    await API.sendMessage(data)
      .then(res => {
        console.log(res?.data);
        navigation?.goBack();
      })
      .catch(err => {
        console.log(err?.data?.error);
      });
  };

  const createReport = async () => {
    const data = {
      doctorId: userId,
      patientId: patient?._id,
      patientName: fields?.name,
      patientAge: fields?.age,
      patientGender: fields?.gender,
      patientHeight: fields?.height,
      patientWeight: fields?.weight,
      medicines: medicines,
      reasons: reasons,
      createdAt: new Date(),
      chatRoomId: chatRoomId,
      description: fields?.description,
    };
    await API.createReport(data)
      .then(res => {
        console.log(res?.data);
        sendMessage();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{height: DIMENSIONS.height / 2}}
        contentContainerStyle={{
          alignItems: 'center',
          // height: '50%',
          // backgroundColor: '#f00',
          // paddingTop: 20,
        }}>
        <Text style={{...styles?.placeholder}}>Name</Text>
        <Input
          placeholder={'Enter full name of patient'}
          value={fields?.name}
          onChangeText={text => {
            setFields({...fields, name: text});
            setErrors({...errors, name: ''});
          }}
          err={errors?.name}
        />
        <Text style={{...styles?.placeholder}}>Age</Text>
        <Input
          placeholder={'Enter age of patient'}
          value={fields?.age}
          onChangeText={text => {
            setFields({...fields, age: text});
            setErrors({...errors, age: ''});
          }}
          err={errors?.name}
        />
        <Text style={{...styles?.placeholder}}>Gender</Text>
        <Input
          placeholder={'Enter gender of patient'}
          value={fields?.gender}
          onChangeText={text => {
            setFields({...fields, gender: text});
            setErrors({...errors, gender: ''});
          }}
          err={errors?.name}
        />
        <Text style={{...styles?.placeholder}}>Height</Text>
        <Input
          placeholder={'Enter height of patient'}
          value={fields?.height}
          onChangeText={text => {
            setFields({...fields, height: text});
            setErrors({...errors, height: ''});
          }}
          err={errors?.height}
        />
        <Text style={{...styles?.placeholder}}>Weight</Text>
        <Input
          placeholder={'Enter weight of patient'}
          value={fields?.weight}
          onChangeText={text => {
            setFields({...fields, weight: text});
            setErrors({...errors, weight: ''});
          }}
          err={errors?.name}
        />
        {/* <Text style={{...styles?.placeholder}}>Reason</Text> */}
        {/* <DropDown
          onPress={() => {
            setReasonSheet(true);
            console.log('open reason sheet');
          }}
          value={fields?.reason}
          placeholder={'Select reason'}
          err={errors?.reason}
        /> */}
        <MultiDropDownComp
          title={'Reasons'}
          placeholder={'Reasons'}
          data={medicalIssues}
          labelField="reason"
          valueField="reason"
          value={reasons}
          onChange={item => {
            setReasons(item);
          }}
          style1={{color: COLORS.accentColor}}
        />

        <Text style={{...styles?.placeholder}}>Medicines</Text>
        {medicines.map(data => {
          return (
            <View>
              {console.log(data)}
              <Text style={{...FONT?.title, color: '#555'}}>
                {data?.medicineName} in{' '}
                {data?.medicineTime?.map(item => {
                  return item + ',';
                })}
              </Text>
            </View>
          );
        })}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: DIMENSIONS?.width - 60,
            justifyContent: 'space-between',
          }}
          key={data}>
          <Input
            placeholder={'Enter medicine name'}
            value={medicineName}
            onChangeText={text => {
              setMedicineName(text);
            }}
            style={{width: DIMENSIONS?.width - 250}}
            err={errors?.name}
          />
          <MultiDropDownComp
            // title={'Reasons'}
            placeholder={'Time'}
            data={TimeValues}
            labelField="label"
            valueField="value"
            value={medicineTime}
            onChange={item => {
              setMedicineTime(item);
            }}
            style={{width: 100}}
            style1={{color: COLORS.accentColor}}
          />
          <Button
            title={'Add'}
            style={{width: 70}}
            onPress={() => {
              let obj = {
                id: Math.random(),
                medicineName,
                medicineTime,
              };
              setMedicineName('');
              setMedicineTime([]);
              setMedicines([...medicines, obj]);
            }}
          />
          {/* <DropDown
            onPress={() => {
              setMedicineTimeSheet(true);
              console.log('open medicine sheet');
            }}
            style={{width: 100}}
            value={medicineTime}
            placeholder={'Time'}
          /> */}
        </View>

        <Text style={{...styles?.placeholder}}>Duration</Text>
        <Input
          keyboardType={'numeric'}
          placeholder={'Enter duration of medicines'}
          value={fields?.duration}
          onChangeText={text => {
            setFields({...fields, duration: text});
            setErrors({...errors, duration: ''});
          }}
          err={errors?.duration}
        />
        <Text style={{...styles?.placeholder}}>Description</Text>
        <Input
          keyboardType={'numeric'}
          placeholder={'Enter description of patient'}
          value={fields?.description}
          onChangeText={text => {
            setFields({...fields, description: text});
            setErrors({...errors, description: ''});
          }}
          err={errors?.duration}
        />
        <View style={{paddingHorizontal: 30, width: '100%', marginBottom: 100}}>
          <Button
            title={'Submit'}
            onPress={() => {
              createReport();
            }}
          />
        </View>
        <Actionsheet isOpen={reasonSheet} onClose={() => setReasonSheet(false)}>
          <Actionsheet.Content>
            {medicalIssues.map(item => {
              return (
                <TouchableOpacity
                  style={{width: DIMENSIONS?.width - 40, padding: 5}}
                  onPress={() => {
                    setReasonSheet(false);
                    setFields({...fields, reasons: item?.reason});
                    // setGender(item);
                    // setErrors({...errors, gender: ''});
                  }}
                  key={item?.id}>
                  <Text style={{...FONT?.title}}>{item?.reason}</Text>
                </TouchableOpacity>
              );
            })}
          </Actionsheet.Content>
        </Actionsheet>
        <Actionsheet
          isOpen={medicineTimeSheet}
          onClose={() => setMedicineTimeSheet(false)}>
          <Actionsheet.Content>
            {['Morning', 'Afternoon', 'Cold'].map(item => {
              return (
                <TouchableOpacity
                  style={{width: DIMENSIONS?.width - 40, padding: 5}}
                  onPress={() => {
                    setMedicineTime(item);
                    setMedicineTimeSheet(false);
                    // setFields({...fields, reasons: item?.reason});
                    // setGender(item);
                    // setErrors({...errors, gender: ''});
                  }}
                  key={item}>
                  <Text style={{...FONT?.title}}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </Actionsheet.Content>
        </Actionsheet>
      </ScrollView>
    </Container>
  );
};

export default CreateReport;

const styles = StyleSheet.create({
  placeholder: {
    ...FONT?.title,
    width: DIMENSIONS?.width - 60,
    textAlign: 'left',
    marginBottom: 5,
    marginTop: 20,
  },
});
