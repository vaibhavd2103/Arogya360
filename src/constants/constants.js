import {Dimensions} from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export const DIMENSIONS = {
  height: height,
  width: width,
};

export const COLORS = {
  blue: '#003467',
  green: '#00DDA7',
  lightBlue: '#5DCFDE',
  yellow: 'rgb(253,181,113)',
  pink: 'rgb(249,107,183)',
  background: '#fff',
  light_black: '#222233',
  error: '#ff3322',
  lead: '#3d3d3d',
  white: '#ffffff',
  grey: '#555555',
  lightRed: '#F76F72',
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
  stackNav: 'stackNav',
  appointment: 'appointment',
  profile: 'profile',
  editProfile: 'editProfile',
  settings: 'settings',
  finddoctor: 'finddoctor',
  medicinetracker: 'medicinetracker',
  phonedirectory: 'phonedirectory',
  message: 'message',
  bmichecker: 'bmichecker',
  doctorsProfile: 'doctorsProfile',
  createReport: 'createReport',
  bookAppointment: 'bookAppointment',
  savedArticles: 'savedArticles',
  appInfo: 'appInfo',
  drAppoitments: 'drAppoitments',
};

export const USERS = {
  doctor: 'doctor',
  patient: 'patient',
};
