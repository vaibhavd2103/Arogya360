import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONT, ROUTES} from '../constants/contants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SlideMenu = ({navigation}) => {
  const options = [
    {
      id: '1',
      name: 'Appointment',
      icon: <FontAwesome name="bookmark" size={24} color="black" />,
      navigation: ROUTES.appointment,
    },
    {
      id: '2',
      name: 'Medicine Tracker',
      icon: <FontAwesome name="bookmark" size={24} color="black" />,
      navigation: ROUTES.medicinetracker,
    },
    {
      id: '3',
      name: 'Phone Directory',
      icon: <FontAwesome name="bookmark" size={24} color="black" />,
      navigation: ROUTES.phonedirectory,
    },
    {
      id: '4',
      name: 'Fine a Doctor',
      icon: <FontAwesome name="bookmark" size={24} color="black" />,
      navigation: ROUTES.finddoctor,
    },
    {
      id: '5',
      name: 'Settings',
      icon: <FontAwesome name="bookmark" size={24} color="black" />,
      navigation: ROUTES.settings,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          // flex: 0.3,
          height: '25%',
          backgroundColor: '#404258',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.7}
        onPress={() => navigation.navigate(ROUTES.profile)}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
          }}
          style={{height: 120, width: 120, borderRadius: 800}}
        />

        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#222',
            fontFamily: 'Poppins-Bold',
            marginTop: 12,
            color: 'white',
          }}>
          Tanisha Thakur
        </Text>
      </TouchableOpacity>
      <View style={{height: '65%', alignItems: 'center'}}>
        {options.map(item => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.navigation);
              }}
              key={item.id}
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                alignItems: 'center',
                // backgroundColor: COLORS.,
                // opacity: 0.5,
                height: 50,
                borderRadius: 20,
                width: '95%',
              }}
              activeOpacity={0.7}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                }}>
                {item.icon}
              </View>
              <Text
                style={{
                  ...FONT.header,
                  marginLeft: 20,
                  color: COLORS.light_black,
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{height: '10%'}}>
        <View
          style={{
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginVertical: 10,
              alignItems: 'center',
              borderRadius: 20,
              justifyContent: 'center',
              height: 45,
              borderColor: '#404258',
              borderWidth: 1,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Text
              style={{
                ...FONT.header,
                color: COLORS.light_black,
              }}>
              Sign Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SlideMenu;

// const styles = StyleSheet.create({});

// import React from 'react';
// import {
//   View,
//   Text,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
// } from '@react-navigation/drawer';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const SlideMenu = props => {
//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView
//         {...props}
//         contentContainerStyle={{backgroundColor: '#8200d6'}}>
//         <Image
//           source={{
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
//           }}
//           style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
//         />
//         <Text
//           style={{
//             color: '#fff',
//             fontSize: 18,
//             // fontFamily: 'Roboto-Medium',
//             marginBottom: 5,
//           }}>
//           John Doe
//         </Text>

//         <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
//           <DrawerItemList {...props} />
//         </View>
//       </DrawerContentScrollView>
//       <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
//         <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             {/* <Ionicons name="exit-outline" size={22} /> */}
//             <FontAwesome name="bookmark" size={24} color="black" />

//             <Text
//               style={{
//                 fontSize: 15,
//                 fontFamily: 'Roboto-Medium',
//                 marginLeft: 5,
//               }}>
//               Sign Out
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default SlideMenu;
