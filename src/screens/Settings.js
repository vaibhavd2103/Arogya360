import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Switch} from 'react-native';
import {useState} from 'react';
import {COLORS, FONT} from '../constants/constants';
import {useEffect} from 'react';
import API from '../axios/api';
import {useSelector} from 'react-redux';

const Settings = () => {
  const userId = useSelector(state => state?.user_id);
  const [waterReminder, setWaterReminder] = useState(true);
  const [notification, setNotification] = useState(true);
  const [medicineTracker, setMedicineTracker] = useState(true);

  const getAllUsers = async () => {
    await API.getAllWaterReminderUsers()
      .then(res => {
        console.log(res.data);
        let index = res?.data?.findIndex(item => item?.userId == userId);
        if (index > -1) {
          setWaterReminder(true);
        } else {
          setWaterReminder(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addWaterReminderUser = async () => {
    const data = {userId: userId};
    await API.addWaterReminderUser(data)
      .then(res => {
        console.log(res.data);
        setWaterReminder(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const removeWaterReminderUser = async () => {
    const data = {userId: userId};
    await API.removeWaterReminderUser(data)
      .then(res => {
        console.log(res.data);
        setWaterReminder(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
    getAllMedicineUser();
  }, []);

  const getAllMedicineUser = async () => {
    await API.getAllMedicineTrackerUsers()
      .then(res => {
        console.log(res?.data);
        let index = res?.data?.findIndex(item => item?.userId == userId);
        if (index > -1) {
          setMedicineTracker(true);
        } else {
          setMedicineTracker(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const addMedicineTrackerUser = async () => {
    const data = {userId: userId};
    await API.addMedicineTrackerUser(data)
      .then(res => {
        console.log(res.data);
        setMedicineTracker(true);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const removeMedicineTrackerUser = async () => {
    const data = {userId: userId};
    await API.removeMedicineTrackerUser(data)
      .then(res => {
        console.log(res.data);
        setMedicineTracker(false);
      })
      .catch(err => {
        console.log(err);
      });
  };

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
            // setWaterReminder(!waterReminder);
            if (waterReminder) {
              removeWaterReminderUser();
            } else {
              addWaterReminderUser();
            }
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
            // setWaterReminder(!waterReminder);
            if (medicineTracker) {
              removeMedicineTrackerUser();
            } else {
              addMedicineTrackerUser();
            }
          }}
          trackColor={COLORS?.blue}
          thumbColor={COLORS?.blue}
          style={{
            elevation: 20,
          }}
        />
      </View>
      {/* <View style={styles.input}>
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
      </View> */}
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
