import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const DIMENSIONS = {
  height: height,
  width: width,
};

export const COLORS = {
  blue: '#5894FF',
  yellow: 'rgb(253,181,113)',
  pink: 'rgb(249,107,183)',
  background: '#f2f2f2',
  light_black: '#222233',
  error: '#ff3322',
  lead: '#3d3d3d',
  white: '#ffffff',
  grey: '#555555',
};

export const FONT = {
  header: {
    fontSize: 16,
    color: COLORS?.light_black,
    fontFamily: 'Poppins-Bold',
  },
  title: {
    fontSize: 14,
    color: COLORS?.light_black,
    fontFamily: 'Poppins-Medium',
  },
  subTitle: {
    fontSize: 12,
    color: COLORS?.light_black,
    fontFamily: 'Poppins-Light',
  },
};

export const ROUTES = {
  splashScreen: 'splashScreen',
  login: 'login',
  signup: 'signup',
  home: 'home',
  article: 'article',
  chat: 'chat',
  tabNav: 'tabNav',
  appointment: 'appointment',
  profile: 'profile',
  editProfile: 'editProfile',
  settings: 'settings',
  finddoctor: 'finddoctor',
  medicinetracker: 'medicinetracker',
  phonedirectory: 'phonedirectory',
};
