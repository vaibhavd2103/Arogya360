import axios from 'axios';
import {NetworkInfo} from 'react-native-network-info';

export const ip = '192.168.0.225';
// export const ip = '192.168.204.47';

// NetworkInfo.getIPV4Address().then(ipv4Address => {
//   console.log(ipv4Address);
//   ip = ipv4Address;
// });

const AxiosInst = axios.create({
  baseURL: `http://${ip}:5000`,
  // baseURL: `http://192.168.0.225:5000`,
});

export default AxiosInst;
