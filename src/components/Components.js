import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HeaderWithSeeAll = ({title, subtitle, onPress, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={{...FONT.title, fontWeight: '700'}}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{...FONT.subTitle, color: COLORS.accentColor}}>
          {subtitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const IconTitle = ({icon, value}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        // justifyContent: 'center',
      }}>
      {icon}
      <Text style={{...FONT.title, color: 'gray', paddingLeft: 10}}>
        {value}
      </Text>
    </View>
  );
};

const TitleSubTitle = ({title, subTitle, style}) => {
  return (
    <View
      style={{
        // flexDirection: 'row',
        // alignItems: 'center',
        marginVertical: 5,

        ...style,
        // justifyContent: 'center',
      }}>
      <Text
        style={{
          ...FONT.header,
          marginRight: 10,
          textAlign: 'justify',
          color: COLORS.blue,
          fontWeight: '600',
        }}>
        {title.toUpperCase()} :{' '}
      </Text>
      <Text
        style={{
          ...FONT.subTitle,
          color: 'gray',
          // marginLeft: 10,
        }}>
        {subTitle}
      </Text>
    </View>
  );
};
const DividedTitleSubTitle = ({title1, title2, subTitle1, subTitle2}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{width: '50%'}}>
        <TitleSubTitle title={title1} subTitle={subTitle1} />
      </View>
      <View style={{width: '50%'}}>
        <TitleSubTitle title={title2} subTitle={subTitle2} />
      </View>
    </View>
  );
};

export {HeaderWithSeeAll, TitleSubTitle, DividedTitleSubTitle};

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: DIMENSIONS.height * 0.01,
    alignItems: 'center',
    padding: 24,
    //  backgroundColor:'pink'
  },
});
