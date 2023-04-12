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
import io from 'socket.io-client';
import {ip} from '../axios/instance';

const Chat = props => {
  //---------------------useState-----------------------------------
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  const getMessages = async () => {
    const hostname = window?.location?.hostname;
    console.log(hostname);
    // const port = window.location.port;
    const localhost = `http://${hostname}:5000`;
    await axios
      .get(`${localhost}/getAllArticles`)
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const socket = io(`http://${ip}:5000`);

  useEffect(() => {
    // NetworkInfo.getIPAddress(ip => {
    //   console.log('IPv4 address:', ip);
    // });
    // getMessages();
    // setMessages([
    //   {
    //     _id: 1,
    //     text: 'Hello developer',
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: 'React Native',
    //       avatar: 'https://placeimg.com/140/140/any',
    //     },
    //   },
    // ]);
    console.log('useeffect');
    socket.on('connection', data => {
      console.log(`Received data: ${data}`);
    });
  }, []);
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
            onSend();
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
  // const onSend = useCallback((messages = []) => {
  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, messages),
  //   );
  // }, []);

  const onSend = async () => {
    const data = {
      _id: Math.random(),
      text: text,
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    };

    let arr = messages;
    arr.unshift(data);
    setMessages(arr);
    setText('');
    // console.log(arr);
    console.log('walla');
    socket?.emit('send_message', {message: 'hello'});
  };
  //-----------------------------------------------------------------------
  return (
    <Container>
      <GiftedChat
        wrapInSafeArea={false}
        messages={messages}
        inverted={true}
        renderInputToolbar={renderInputToolbar}
        // onSend={messages => onSend(messages)}
        user={{
          _id: 2,
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
