import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const DIMENSIONS = {
  height: height,
  width: width,
};

export const FONT = {
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Medium',
  },
  subTitle: {
    fontSize: 12,
    // fontWeight: 'bold',
    color: '#222',
    fontFamily: 'Poppins-Regular',
  },
};

export const ROUTES = {
  login: 'login',
  signup: 'signup',
  home: 'home',
  article: 'article',
  chat: 'chat',
  tabNav: 'tabNav',
  appointment: 'appointment',
  profile: 'profile',
  settings: 'settings',
};
