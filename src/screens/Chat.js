import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
//---------------------packages-----------------------------------------------------------
import {Bubble, GiftedChat} from 'react-native-gifted-chat';
import DocumentPicker from 'react-native-document-picker';
//------------------------------components/constants----------------------------------------
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT, ROUTES} from '../constants/constants';
//------------------------------------icons--------------------------------------------------
import Send from 'react-native-vector-icons/Ionicons';
import Attachment from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import {NetworkInfo} from 'react-native-network-info';
import {io} from 'socket.io-client';
import {ip} from '../axios/instance';
import {useRef} from 'react';
import {useSelector} from 'react-redux';
import API from '../axios/api';
import Loader from '../components/Loader';
import CustomHeader from '../components/CustomHeader';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Back from 'react-native-vector-icons/MaterialCommunityIcons';
import {ONESIGNAL_API_KEY, ONESIGNAL_APP_ID} from '../../config';

const Chat = props => {
  //---------------------useState-----------------------------------
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const userId = useSelector(state => state?.user_id);
  const userType = useSelector(state => state?.userType);
  const params = props?.route?.params;
  const [loading, setLoading] = useState(true);
  console.log(params);

  const getMessages = async () => {
    await API.getMessage(params?._id)
      .then(res => {
        // console.log(res?.data);
        let giftedChatMessages = res?.data?.messages?.map(chatMessage => {
          let gcm = {
            _id: chatMessage?._id,
            text: chatMessage?.message,
            createdAt: chatMessage?.createdAt,
            video:
              chatMessage?.type == 4
                ? `${baseURL}/chat/${chatMessage?.message}`
                : null,
            image:
              chatMessage?.type == 3 || chatMessage?.type == 2
                ? `${baseURL}/chat/${chatMessage?.message}`
                : null,
            document:
              chatMessage?.type == 2
                ? `https://banner2.cleanpng.com/20180331/vww/kisspng-computer-icons-document-memo-5ac0480f061158.0556390715225507990249.jpg`
                : null,
            user: {
              _id: chatMessage?.senderId,
              name: chatMessage?.full_name,
            },
          };
          return gcm;
        });
        setMessages(giftedChatMessages);
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const socket = io(`http://${ip}:5000`);
  // const socket = io(`http://${ip}:5000`, {
  //   transports: ['websocket'],
  //   jsonp: false,
  //   forceNew: true,
  // });

  const socket = useRef();

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      socket.current = io(`http://${ip}:5000`);

      socket.current.emit(
        'join_room',
        params?._id,
        // 123,
      );

      socket.current.on('connected', data => {
        console.log(data);
      });

      socket.current.on('receive_message', msg => {
        console.log('message received from socket', msg);
        getMessages();
        // if (msg) {
        //   setMessages([...messages, msg]);
        // }
      });
      getMessages();
    }
    return () => {
      socket?.current?.disconnect();
    };
  }, [socket, isFocused]);

  const navigation = useNavigation();

  const sendNotification = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', `Basic ${ONESIGNAL_API_KEY}`);
    myHeaders.append(
      'Cookie',
      '__cf_bm=bdqS8ErB69aUdLzaYoVpaeg_oahFuelmup5mdcq77Ks-1681462163-0-ARCUV2u5fo8eJFtgQBme3gk37ZYVgz607LDktKkGkLh7TAceBiXLaFrn1PlFwG8XVvqD3QmI0RU6+CVeGcGcnVE=',
    );

    var raw = {
      app_id: ONESIGNAL_APP_ID,
      data: {foo: 'bar'},
      contents: {en: text},
      include_external_user_ids: [params?.user?._id],
    };
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(raw),
      redirect: 'follow',
    };

    fetch('https://onesignal.com/api/v1/notifications', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const sendMessage = async () => {
    const data = {
      senderId: userId,
      receiverId: params?.user?._id,
      chatRoomId: params?._id,
      // chatRoomId: 123,
      createdAt: new Date(),
      messageType: 1,
      message: text,
    };
    await API.sendMessage(data)
      .then(res => {
        console.log(res?.data);
        setText('');
        sendNotification();
        getMessages();
      })
      .catch(err => {
        console.log(err?.data?.error);
      });
    await socket.current.emit('send_message', data);
  };

  //------------------------------file Picker------------------------------------------------
  const openFilePicker = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };
  //---------------------------------------TextInput function---------------------------------
  const renderInputToolbar = () => {
    return (
      <View style={styles.textInputView}>
        <TextInput
          value={text}
          onChangeText={e => {
            setText(e);
          }}
          style={styles.textInput}
          placeholder="Enter message"
          placeholderTextColor={COLORS?.grey}
        />
        <TouchableOpacity
          onPress={() => {
            openFilePicker();
          }}>
          <Attachment
            name="attachment"
            size={24}
            color="black"
            style={{paddingRight: 10}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // onSend();
            sendMessage();
          }}>
          <Send
            name="md-send"
            size={24}
            color="black"
            style={{paddingRight: 10}}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            ...FONT?.title,
            color: '#fff',
          },
          left: {
            ...FONT?.title,
            color: '#fff',
          },
        }}
        wrapperStyle={{
          right: {
            backgroundColor: COLORS?.blue,
            maxWidth: DIMENSIONS?.width - 100,
            elevation: 10,
            marginRight: 10,
          },
          left: {
            backgroundColor: `${COLORS?.grey}`,
            maxWidth: DIMENSIONS?.width - 100,
            elevation: 10,
          },
        }}
      />
    );
  };

  //-----------------------------------------------------------------------
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* <CustomHeader
        style={{}}
        title={params?.user?.name}
        RightIcon={() => {
          if (userType == 2) {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES?.createReport, {
                    patient: params?.user,
                    chatRoomId: params?._id,
                  });
                }}
                style={{
                  backgroundColor: COLORS?.blue,
                  padding: 8,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  paddingBottom: 10,
                }}
                activeOpacity={0.8}>
                <Text style={{...FONT?.title, color: '#fff'}}>
                  Create Report
                </Text>
              </TouchableOpacity>
            );
          }
        }}
      /> */}
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          height: 70,
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: COLORS.background,
          elevation: 10,
          width: DIMENSIONS.width,
          // position: 'absolute',
          // top: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            //   backgroundColor: COLORS.blue,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              // backgroundColor: COLORS?.blue,
              // marginHorizontal: 10,
              // marginRight: 10,
            }}
            activeOpacity={0.8}
            onPress={() => navigation.goBack()}>
            <Back name={'chevron-left'} size={40} color={COLORS.blue} />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmIh7V-Sq7K48WnUqtu18enb2Mnm_3fwnDJg&usqp=CAU',
            }}
            style={{
              height: 45,
              width: 45,
              borderRadius: 50,
            }}
          />
          <Text
            numberOfLines={1}
            style={{
              ...FONT.header,
              marginLeft: 10,
              fontSize: 18,
              maxWidth: DIMENSIONS.width - 200,
            }}>
            {params?.user?.name}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES?.createReport, {
                patient: params?.user,
                chatRoomId: params?._id,
              });
            }}
            style={{
              backgroundColor: COLORS?.blue,
              padding: 8,
              borderRadius: 10,
              // paddingHorizontal: 15,
            }}
            activeOpacity={0.8}>
            <Text style={{...FONT?.subTitle, color: '#fff'}}>
              Create Report
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Loader
        loading={loading}
        uri={require('../assets/Lottie/messagesLoader.json')}
      />
      <GiftedChat
        wrapInSafeArea={false}
        messages={messages}
        inverted={true}
        renderInputToolbar={renderInputToolbar}
        renderBubble={renderBubble}
        showAvatarForEveryMessage={true}
        renderAvatar={() => null}
        messagesContainerStyle={{
          backgroundColor: '#fff',
          marginTop: 0,
        }}
        // onSend={messages => onSend(messages)}
        user={{
          _id: userId,
        }}
      />
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: -5,
    borderRadius: 10,
    width: DIMENSIONS.width - 5,
    alignSelf: 'center',
    elevation: 20,
    // shadowColor: COLORS.blue,
  },
  textInput: {
    // backgroundColor: '#5ff',
    width: DIMENSIONS.width - 80,
    padding: 10,
    borderRadius: 10,
    ...FONT?.title,
    // color: '#000',
  },
});
