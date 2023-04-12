import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
//---------------------packages-----------------------------------------------------------
import {GiftedChat} from 'react-native-gifted-chat';
import DocumentPicker from 'react-native-document-picker';
//------------------------------components/constants----------------------------------------
import Container from '../components/Container';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
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

const Chat = props => {
  //---------------------useState-----------------------------------
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const userId = useSelector(state => state?.user_id);
  const params = props?.route?.params;
  const [loading, setLoading] = useState(true);
  // console.log(params);

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

  const sendMessage = async () => {
    const data = {
      senderId: userId,
      receiverId: params?.user?._id,
      chatRoomId: params?._id,
      createdAt: new Date(),
      messageType: 1,
      message: text,
    };
    await API.sendMessage(data)
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
    await socket.current.emit('send_message', data);
  };
  // const socket = io(`http://${ip}:5000`);
  // const socket = io(`http://${ip}:5000`, {
  //   transports: ['websocket'],
  //   jsonp: false,
  //   forceNew: true,
  // });

  const socket = useRef();

  useEffect(() => {
    socket.current = io(`http://${ip}:5000`);
    console.log('useeffect');

    socket.current.emit(
      'join_room',
      123,
      // params?.user?._id
    );

    socket.current.on('receive_message', msg => {
      console.log('message received from socket', msg);
    });

    // socket.on('connection', data => {
    //   console.log(`Received data: ${data}`);
    // });

    // socket.emit('join_room', {
    //   chatRoomId: params?._id,
    //   otherUserId: params?.user?._id,
    // });

    // socket.on('receive_message', data => {
    //   console.log('message received from socket', data);
    // });
    getMessages();
    return () => {
      socket?.current?.disconnect();
    };
  }, [socket]);
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
  //--------------------------------send function----------------------------------------

  //-----------------------------------------------------------------------
  return (
    <Container>
      <Loader
        loading={loading}
        uri={require('../assets/Lottie/messagesLoader.json')}
      />
      <GiftedChat
        wrapInSafeArea={false}
        messages={messages}
        inverted={true}
        renderInputToolbar={renderInputToolbar}
        // onSend={messages => onSend(messages)}
        user={{
          _id: userId,
        }}
      />
    </Container>
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
