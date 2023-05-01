import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import SplashScreen from './src/screens/SplashScreen';
import AuthNavigator from './src/navigation/AuthNavigator';
import {Provider, useSelector} from 'react-redux';
import store from './src/redux/store';
import {COLORS} from './src/constants/constants';
import OneSignal from 'react-native-onesignal';
import {ONESIGNAL_APP_ID} from './config';
import API from './src/axios/api';
import axios from 'axios';
import {baseUrl} from './src/axios/instance';

const App = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    let splashscreenTimeout = setTimeout(
      () => setShowSplashScreen(false),
      2500,
    );
    return () => {
      clearTimeout(splashscreenTimeout);
    };
  }, []);

  const scheduleWaterReminderTask = async () => {
    // await  API.scheduleWaterReminder()
    await axios
      .post(`${baseUrl}/scheduleWaterReminder`)
      .then(res => {
        console.log(res.data);
        console.log('Scheduled Successfully ');
      })
      .catch(err => {
        console.log(err);
        console.log('water reminder unsuccessfull');
      });
  };
  const scheduleMedicineTrackerTask = async () => {
    // await  API.scheduleWaterReminder()
    await axios
      .post(`${baseUrl}/scheduleMedicineTracker`)
      .then(res => {
        console.log(res.data);
        console.log('Scheduled Successfully ');
      })
      .catch(err => {
        console.log(err);
        console.log('medicine tracker unsuccessfull');
      });
  };
  let externalUserId = useSelector(state => state?.user_id); // You will supply the external user id to the OneSignal SDK

  useEffect(() => {
    console.log('app.js line 27------>', isAuthenticated);
    scheduleWaterReminderTask();
    scheduleMedicineTrackerTask();
    // Setting External User Id with Callback Available in SDK Version 3.7.0+
    OneSignal.setExternalUserId(externalUserId, results => {
      // The results will contain push and email success statuses
      console.log('Results of setting external user id');
      console.log(results);

      // Push can be expected in almost every situation with a success status, but
      // as a pre-caution its good to verify it exists
      if (results.push && results.push.success) {
        console.log('Results of setting external user id push status:');
        console.log(results.push.success);
      }

      // Verify the email is set or check that the results have an email success status
      if (results.email && results.email.success) {
        console.log('Results of setting external user id email status:');
        console.log(results.email.success);
      }
    });

    // OneSignal Initialization
    OneSignal.setAppId(ONESIGNAL_APP_ID);

    // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
    OneSignal.promptForPushNotificationsWithUserResponse();

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  }, [isAuthenticated]);

  return showSplashScreen ? (
    <SplashScreen />
  ) : (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={COLORS?.background}
        barStyle={'dark-content'}
      />
      <NavigationContainer>
        {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
