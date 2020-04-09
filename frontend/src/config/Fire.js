import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAp8ZzqzoOK4vXWW8PgapkxsP6mSiHOBN8",
    authDomain: "capstone-9d42c.firebaseapp.com",
    databaseURL: "https://capstone-9d42c.firebaseio.com",
    projectId: "capstone-9d42c",
    storageBucket: "capstone-9d42c.appspot.com",
    messagingSenderId: "602088863299",
    appId: "1:602088863299:web:524450c2ea04a8cc4506f6",
    measurementId: "G-JGVFPKWMV4"
  };

const fire = firebase.initializeApp(config);
export default fire;