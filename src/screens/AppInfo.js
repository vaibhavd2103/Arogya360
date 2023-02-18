import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../constants/constants';

const AppInfo = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <Image
          style={{
            height: 160,
            width: 160,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={{padding: 15}}>
        <Text style={{...FONT.header}}>App Version : 7.0.2</Text>
        <Text style={{textAlign: 'justify'}}>
          THIS APPLICATION DOES NOT PROVIDE MEDICAL ADVICE. The contents of the
          Application, such as text, graphics, images, logos, icons, data,
          graphs, audio, videos, computer programs and other material and
          information (collectively the "Content"), are for informational
          purposes only.
        </Text>
        <Text>
          THE CONTENT IS NOT INTENDED TO BE A SUBSTITUTE FOR PROFESSIONAL
          MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT. ALWAYS SEEK THE ADVICE OF
          YOUR PHYSICIAN OR OTHER QUALIFIED HEALTH PROVIDER WITH ANY QUESTIONS
          YOU MAY HAVE REGARDING A MEDICAL CONDITION. NEVER DISREGARD
          PROFESSIONAL MEDICAL ADVICE OR DELAY IN SEEKING ADVICE BECAUSE OF
          SOMETHING YOU HAVE READ OR SEEN ON THIS APPLICATION.
        </Text>
        <Text>
          Arogya 360 does not recommend or endorse any specific tests, products,
          procedures, opinions, or other information that may be mentioned on
          the Application. RELIANCE ON ANY INFORMATION PROVIDED BY APPLICATION
          PROVIDER, APPLICATION PROVIDER EMPLOYEES, OTHERS APPEARING ON THE
          APPLICATION AT THE INVITATION OF APPLICATION PROVIDER, OR OTHER
          VISITORS TO THE APPLICATION IS SOLELY AT YOUR OWN RISK. This
          Application is provided to educate consumers on health care and
          medical issues that may affect their daily lives.
        </Text>
        <Text>
          This Application does not constitute the practice of any medical,
          nursing or other professional health care advice, diagnosis or
          treatment. IF YOU HAVE OR SUSPECT THAT YOU HAVE A MEDICAL PROBLEM OR
          CONDITION, PLEASE CONTACT A QUALIFIED HEALTH CARE
          PROFESSIONAL IMMEDIATELY.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AppInfo;

const styles = StyleSheet.create({});
