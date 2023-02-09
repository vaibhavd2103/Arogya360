import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../components/Container';
import Input from '../components/TextInput';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {Button} from '../components/Buttons';

const CreateReport = () => {
  const [fields, setFields] = useState({
    name: '',
    problem: '',
    medicines: [],
    duration: '',
    age: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    problem: '',
    medicines: [],
    duration: '',
    age: '',
  });

  const createReport = async () => {
    if (!fields?.name) {
      setErrors({...errors, name: 'Please enter name'});
    }
  };

  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          alignItems: 'center',
          height: '100%',
          // paddingTop: 20,
        }}>
        <Text style={{...styles?.placeholder}}>
          Name <Text style={{...FONT?.title, color: COLORS?.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Enter full name of patient'}
          value={fields?.name}
          onChangeText={text => {
            setFields({...fields, name: text});
            setErrors({...fields, name: ''});
          }}
          err={errors?.name}
        />
        <Text style={{...styles?.placeholder}}>
          Age <Text style={{...FONT?.title, color: COLORS?.error}}>*</Text>
        </Text>
        <Input
          placeholder={"Enter patient's age"}
          value={fields?.age}
          keyboardType={'numeric'}
          onChangeText={text => {
            setFields({...fields, age: text});
            setErrors({...fields, age: ''});
          }}
          err={errors?.age}
        />
        <Text style={{...styles?.placeholder}}>
          Name <Text style={{...FONT?.title, color: COLORS?.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Enter full name of patient'}
          value={fields?.name}
          onChangeText={text => {
            setFields({...fields, name: text});
            setErrors({...fields, name: ''});
          }}
          err={errors?.name}
        />
        <Text style={{...styles?.placeholder}}>
          Name <Text style={{...FONT?.title, color: COLORS?.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Enter full name of patient'}
          value={fields?.name}
          onChangeText={text => {
            setFields({...fields, name: text});
            setErrors({...fields, name: ''});
          }}
          err={errors?.name}
        />
        <Text style={{...styles?.placeholder}}>
          Name <Text style={{...FONT?.title, color: COLORS?.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Enter full name of patient'}
          value={fields?.name}
          onChangeText={text => {
            setFields({...fields, name: text});
            setErrors({...fields, name: ''});
          }}
          err={errors?.name}
        />
        <Text style={{...styles?.placeholder}}>
          Name <Text style={{...FONT?.title, color: COLORS?.error}}>*</Text>
        </Text>
        <Input
          placeholder={'Enter full name of patient'}
          value={fields?.name}
          onChangeText={text => {
            setFields({...fields, name: text});
            setErrors({...fields, name: ''});
          }}
          err={errors?.name}
        />
        <View style={{paddingHorizontal: 30, width: '100%'}}>
          <Button
            title={'Submit'}
            onPress={() => {
              createReport();
            }}
          />
        </View>
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
