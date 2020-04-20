import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyDz4rP2bHj2Rsa9S7auPD7J4KNgrIBmfkk",
  authDomain: "capstone491-ee7aa.firebaseapp.com",
  databaseURL: "https://capstone491-ee7aa.firebaseio.com",
  projectId: "capstone491-ee7aa",
  storageBucket: "capstone491-ee7aa.appspot.com",
  messagingSenderId: "290031732132",
  appId: "1:290031732132:web:3936df72e3964e7cb0ed31",
  measurementId: "G-6JJDT1RDY0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
