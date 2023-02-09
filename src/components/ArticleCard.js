import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import Verticledots from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Comment from 'react-native-vector-icons/FontAwesome';
import Like from 'react-native-vector-icons/AntDesign';
import Notlike from 'react-native-vector-icons/AntDesign';
import Share from 'react-native-vector-icons/Feather';
import Bookmark from 'react-native-vector-icons/FontAwesome';
import NotBookmark from 'react-native-vector-icons/FontAwesome';

const ArticleCard = ({item, index, length}) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        marginBottom: 15,
        padding: 15,
        width: DIMENSIONS?.width - 40,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 10,
        shadowColor: `${COLORS?.blue}`,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: item?.profilePic}}
            style={{height: 50, width: 50, borderRadius: 12}}
          />
          <View
            style={{
              paddingLeft: 10,
            }}>
            <View style={{}}>
              <Text style={{...FONT.header}}>{item?.docName}</Text>
            </View>
            <View style={{paddingTop: 2}}>
              <Text style={{...FONT.subTitle}}>{item?.speciality}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            // paddingRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Verticledots
            name="dots-three-vertical"
            size={21}
            color={COLORS.grey}
          />
        </TouchableOpacity>
      </View>
      {item?.img ? (
        <Image
          source={{uri: item?.img}}
          style={{height: 250, width: '100%', borderRadius: 10, marginTop: 10}}
        />
      ) : null}
      <View style={{paddingTop: 10}}>
        <Text
          style={{
            ...FONT.title,
            alignItems: 'center',
            textAlign: 'justify',
            justifyContent: 'center',
          }}
          numberOfLines={2}>
          {item?.article}
        </Text>
        <TouchableOpacity>
          <Text style={{...FONT.subTitle}} onPress={() => {}}>
            see more..
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 15}}>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 5,
            width: '90%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setLike(!like);
            }}>
            {like ? (
              <Notlike
                name="like1"
                size={21}
                style={{marginHorizontal: 10}}
                color={COLORS.blue}
              />
            ) : (
              <Like
                name="like2"
                size={21}
                style={{marginHorizontal: 10}}
                color={COLORS.light_black}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Comment
              name="comment-o"
              size={19}
              style={{marginHorizontal: 10}}
              color={COLORS.light_black}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Share
              name="share-2"
              size={19}
              style={{marginHorizontal: 10}}
              color={COLORS.light_black}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '10%'}}>
          <TouchableOpacity
            onPress={() => {
              setBookmark(!bookmark);
            }}>
            {bookmark ? (
              <Bookmark name="bookmark" size={21} color={COLORS.light_black} />
            ) : (
              <NotBookmark
                name="bookmark-o"
                size={21}
                color={COLORS.light_black}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({});
