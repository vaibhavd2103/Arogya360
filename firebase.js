// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCgEz0SQBFBqg0FEi8lt6ff8tWyGAi3weY',
  authDomain: 'arogya360-13740.firebaseapp.com',
  projectId: 'arogya360-13740',
  storageBucket: 'arogya360-13740.appspot.com',
  messagingSenderId: '63295997071',
  appId: '1:63295997071:web:ad06e02ea19c2df61bdcfa',
  measurementId: 'G-WX62PDWMFY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
