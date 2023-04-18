import {AVATAR_KEY} from '../../config';
import AxiosInst from './instance';
const API = {};

//
API.doctorSignup = async data => AxiosInst.post('/doctorSignup', data);
API.patientSignup = async data => AxiosInst.post('/patientSignup', data);
API.login = async data => AxiosInst.post('/login', data);
API.getUserDetails = async (id, userType) =>
  AxiosInst.get(`/getProfile?userId=${id}&userType=${userType}`);
API.editProfile = async data => AxiosInst.post(`/editProfile`, data);

//
API.bookAppointment = async data => AxiosInst.post('/bookAppointment', data);
API.getMyAppointments = async (userId, userType) =>
  AxiosInst.get(`/getMyAppointments?userId=${userId}&userType=${userType}`);
API.getBookedAppointments = async (userId, userType) =>
  AxiosInst.get(`/getBookedAppointments?userId=${userId}`);
API.deleteAppointment = async data =>
  AxiosInst.post('/deleteAppointment', data);
API.getAllDoctors = async () => AxiosInst.get('/getAllDoctors');

//
API.createArticle = async data => AxiosInst.post('/createArticle', data);
API.likeArticle = async data => AxiosInst.post('/likeArticle', data);
API.getAllArticles = async () => AxiosInst.get('/getAllArticles');
API.getMyArticles = async data => AxiosInst.post('/getMyArticles', data);
API.saveArticle = async data => AxiosInst.post('/saveArticle', data);
//
API.createChatRoom = async data => AxiosInst.post('/createChatRoom', data);
API.getMyChatRooms = async (userId, userType) =>
  AxiosInst.get(`/getMyChatRooms?userType=${userType}&userId=${userId}`);
API.sendMessage = async data => AxiosInst.post('/sendMessage', data);
API.getMessage = async chatRoomId =>
  AxiosInst.get(`/getMessages?chatRoomId=${chatRoomId}`);

//
API.createReport = async data => AxiosInst.post('/createReport', data);
API.getMyReport = async userId =>
  AxiosInst.get(`/getMyReport?userId=${userId}`);

//
API.addWaterReminderUser = async data =>
  AxiosInst.post('/addWaterReminderUser', data);
API.removeWaterReminderUser = async data =>
  AxiosInst.post('/removeWaterReminderUser', data);
API.scheduleWaterReminder = async () =>
  AxiosInst.post('/scheduleWaterReminder');
API.getAllWaterReminderUsers = async () =>
  AxiosInst.get('/getAllWaterReminderUsers');

export default API;
