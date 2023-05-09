import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, DIMENSIONS, FONT} from '../constants/constants';
import Verticledots from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Comment from 'react-native-vector-icons/FontAwesome';
import Like from 'react-native-vector-icons/AntDesign';
import Notlike from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Bookmark from 'react-native-vector-icons/FontAwesome';
import NotBookmark from 'react-native-vector-icons/FontAwesome';
import Share from 'react-native-share';
import {Menu} from 'native-base';
import {AVATAR_KEY} from '../../config';
import API from '../axios/api';
import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const ArticleCard = ({item, index, length, saved}) => {
  const userId = useSelector(state => state?.user_id);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [bookmark, setBookmark] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const onShare = () => {
    var message = item?.article;
    console.log('message', message);
    const options = {
      title: 'Share the Article',
      message: `Checkout new article by\n${item?.user?.name} on our App \n\n${item?.description}\n\nCheck out app on this url\n`,
      url: `https://mailchi.mp/0d11e22015e3/arogya360`,
      // url: item?.img,
      // urls: [item?.img],
    };
    try {
      Share.open(options).catch(err => {
        console.log('error is ---->', err);
      });
    } catch (err) {
      console.log(err);
    }
  };
  const likeChecker = () => {
    setLikeCount(item?.likes?.length);
    const index = item?.likes?.findIndex(data => data == userId);
    if (index > -1) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  const likeArticle = async () => {
    // setLike(!like);
    if (like) {
      setLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setLike(true);
      setLikeCount(likeCount + 1);
    }
    const data = {
      articleId: item?._id,
      userId: userId,
    };
    await API.likeArticle(data)
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const saveChecker = () => {
    const index = item?.savePost?.findIndex(data => data == userId);
    if (index > -1) {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
  };
  const saveArticle = async () => {
    // setBookmark(!like);
    if (bookmark) {
      setBookmark(false);
    } else {
      setBookmark(true);
    }
    const data = {
      articleId: item?._id,
      userId: userId,
    };
    await API.saveArticle(data)
      .then(res => {
        console.log(res?.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // const saveArticle = async()=>{
  //   const data = {
  //     "articleId":"643adfcfd4eb4cea24ca5768",
  //     "userId":"64379646c16075d11a7404ef"
  //   }
  //   await
  useEffect(() => {
    likeChecker();
    saveChecker();
  }, [item]);

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        marginVertical: 15,
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
            source={{
              //  uri: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
              uri: `https://avatars.abstractapi.com/v1/?api_key=${AVATAR_KEY}&name=${item?.user?.name}&background_color=003467&is_bold=true`,
            }}
            style={{height: 50, width: 50, borderRadius: 12}}
          />
          <View
            style={{
              paddingLeft: 10,
            }}>
            <View style={{}}>
              <Text style={{...FONT.header}}>{item?.user?.name}</Text>
            </View>
            <View style={{paddingTop: 2}}>
              <Text style={{...FONT.subTitle}}>{item?.user?.specialty}</Text>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Menu
            mr={5}
            marginTop={50}
            w="100"
            borderRadius={10}
            style={{elevation: 20, shadowColor: COLORS?.blue}}
            backgroundColor={'#fff'}
            trigger={triggerProps => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}>
                  <Verticledots
                    name="dots-three-vertical"
                    size={21}
                    color={COLORS.grey}
                  />
                </Pressable>
              );
            }}>
            <Menu.Item
              style={{right: 0, backgroundColor: '#fff', ...FONT?.title}}>
              Report
            </Menu.Item>
          </Menu>
        </TouchableOpacity> */}
      </View>

      <View style={{paddingTop: 10}}>
        {item?.image ? (
          <Image
            source={{uri: item?.image}}
            style={{
              height: 300,
              width: '100%',
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: '#f00',
            }}
            resizeMode="contain"
          />
        ) : null}
        {item?.title || item?.description ? (
          <>
            <Text
              style={{
                ...FONT.title,
                alignItems: 'center',
                textAlign: 'justify',
                justifyContent: 'center',
              }}
              // numberOfLines={showMore ? null : 2}
              onTextLayout={e =>
                setReadMore(e?.nativeEvent?.lines?.length > 3)
              }>
              {item?.title}
            </Text>
            <Text
              style={{
                ...FONT.subTitle,
                alignItems: 'center',
                textAlign: 'justify',
                justifyContent: 'center',
              }}
              numberOfLines={showMore ? null : 2}
              onTextLayout={e =>
                setReadMore(e?.nativeEvent?.lines?.length > 3)
              }>
              {item?.description}
            </Text>
          </>
        ) : null}
        {readMore && (
          <Text
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{
              color: COLORS?.green,
              fontSize: 12,
            }}>
            {!showMore ? 'Read More' : 'View less'}
          </Text>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 15,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // marginHorizontal: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              // setLike(!like);
              likeArticle();
            }}>
            {like ? (
              <Notlike
                name="like1"
                size={21}
                style={{marginRight: 10}}
                color={COLORS.blue}
              />
            ) : (
              <Like
                name="like2"
                size={21}
                style={{marginRight: 10}}
                color={COLORS.light_black}
              />
            )}
          </TouchableOpacity>
          <Text style={{...FONT.subTitle, top: 3}}>{likeCount} likes</Text>

          {/* <TouchableOpacity onPress={() => {}}>
            <Comment
              name="comment-o"
              size={19}
              style={{marginHorizontal: 10}}
              color={COLORS.light_black}
            />
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => {
              onShare();
            }}>
            <Feather
              name="share-2"
              size={19}
              style={{marginHorizontal: 10}}
              color={COLORS.light_black}
            />
          </TouchableOpacity>
        </View>
        <View style={{width: '10%'}}>
          {saved ? (
            <View>
              <Bookmark name="bookmark" size={21} color={COLORS.light_black} />
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                saveArticle();
              }}>
              {bookmark ? (
                <Bookmark
                  name="bookmark"
                  size={21}
                  color={COLORS.light_black}
                />
              ) : (
                <NotBookmark
                  name="bookmark-o"
                  size={21}
                  color={COLORS.light_black}
                />
              )}
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({});
