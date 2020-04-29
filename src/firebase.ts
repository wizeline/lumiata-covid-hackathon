import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

// app config
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: 'lumiata-covid-hackathon.firebaseapp.com',
    databaseURL: 'https://lumiata-covid-hackathon.firebaseio.com',
    projectId: 'lumiata-covid-hackathon',
    storageBucket: 'lumiata-covid-hackathon.appspot.com',
    messagingSenderId: '1014360180139',
    appId: '1:1014360180139:web:701b1cccd2b224b4e67eee',
    measurementId: 'G-0KNFX6BTJW',
};
firebase.initializeApp(firebaseConfig);

// analytics
firebase.analytics();

// auth
firebase.auth().useDeviceLanguage();

export default firebase;
