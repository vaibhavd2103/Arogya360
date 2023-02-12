import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native';
import {useState} from 'react';
import {COLORS, FONT} from '../constants/constants';

const Settings = () => {
  const [waterReminder, setWaterReminder] = useState(true);
  const [notification, setNotification] = useState(true);
  const [medicineTracker, setMedicineTracker] = useState(true);
  return (
    <View style={{flex: 1, paddingVertical: 20, backgroundColor: COLORS.white}}>
      <View style={styles.input}>
        <Text
          style={{
            ...FONT.header,
          }}>
          Water Reminder{' '}
        </Text>
        <Switch
          value={waterReminder}
          onValueChange={() => {
            setWaterReminder(!waterReminder);
          }}
          trackColor={COLORS?.blue}
          thumbColor={COLORS?.blue}
          style={{
            elevation: 20,
          }}
        />
      </View>
      <View style={styles.input}>
        <Text
          style={{
            ...FONT.header,
          }}>
          Medicine Tracker
        </Text>
        <Switch
          value={medicineTracker}
          onValueChange={() => {
            setMedicineTracker(!medicineTracker);
          }}
          trackColor={COLORS?.blue}
          thumbColor={COLORS?.blue}
          style={{
            elevation: 20,
          }}
        />
      </View>
      <View style={styles.input}>
        <Text
          style={{
            ...FONT.header,
          }}>
          Notification
        </Text>
        <Switch
          value={notification}
          onValueChange={() => {
            setNotification(!notification);
          }}
          trackColor={COLORS?.blue}
          thumbColor={COLORS?.blue}
          style={{
            elevation: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
