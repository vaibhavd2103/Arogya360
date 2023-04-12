import AxiosInst from './instance';
const API = {};

API.doctorSignup = async data => AxiosInst.post('/doctorSignup', data);
API.patientSignup = async data => AxiosInst.post('/patientSignup', data);
API.login = async data => AxiosInst.post('/login', data);
API.getUserDetails = async (id, userType) =>
  AxiosInst.get(`/getProfile/${id}/${userType}`);
API.editProfile = async data => AxiosInst.post(`/editProfile`, data);
API.bookAppointment = async data => AxiosInst.post('/bookAppointment', data);
API.getMyAppointments = async (userId, userType) =>
  AxiosInst.get(`/getMyAppointments?userId=${userId}&userType=${userType}`);
API.createArticle = async data => AxiosInst.post('/createArticle', data);
API.getAllArticles = async data => AxiosInst.post('/getAllArticles', data);
API.getMyArticles = async data => AxiosInst.post('/getMyArticles', data);
API.createChatRoom = async data => AxiosInst.post('/createChatRoom', data);
API.getMyChatRooms = async (userId, userType) =>
  AxiosInst.get(`/getMyChatRooms?userId=${userId}&userType=${userType}`);

export default API;
