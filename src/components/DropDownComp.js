import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MultiDropDownComp = ({
  data,
  labelField,
  valueField,
  placeholder,
  onChange,
  value,
  title,
  search,
  style,
  style1,
}) => {
  return (
    <View style={{marginVertical: 6, width: DIMENSIONS.width - 60, ...style}}>
      {title && <Text style={{...styles?.placeholder}}>{title}</Text>}
      <MultiSelect
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: 10,
          padding: 10,
          fontSize: 12,
          ...FONT.title,
          elevation: 20,
          shadowColor: `${COLORS.blue}cc`,
        }}
        placeholderStyle={{...FONT.title, color: 'grey'}}
        selectedTextStyle={{...FONT.title}}
        inputSearchStyle={{...FONT.title}}
        itemTextStyle={{...FONT.title, color: 'black'}}
        data={data}
        search={search}
        searchPlaceholder="Search"
        labelField={labelField}
        valueField={valueField}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={{...FONT.subTitle}}>{item?.label} </Text>
              <AntDesign color="black" name="delete" size={17} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export {MultiDropDownComp};

const styles = StyleSheet.create({
  placeholderText: {
    width: '100%',
    // marginTop: 20,
    // marginBottom: 5,
    // marginLeft: 60,
  },
  placeholder: {
    ...FONT?.title,
    width: DIMENSIONS?.width - 60,
    textAlign: 'left',
    marginBottom: 5,
    marginTop: 20,
  },
  errText: {
    ...FONT.subTitle,
    color: COLORS.error,
    fontSize: 12,
    paddingTop: 10,
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
  },
});
