import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
import 'firebase/database'

var firebaseConfig = {

  //key for capstone491
  apiKey: "AIzaSyDz4rP2bHj2Rsa9S7auPD7J4KNgrIBmfkk",
  authDomain: "capstone491-ee7aa.firebaseapp.com",
  databaseURL: "https://capstone491-ee7aa.firebaseio.com",
  projectId: "capstone491-ee7aa",
  storageBucket: "capstone491-ee7aa.appspot.com",
  messagingSenderId: "290031732132",
  appId: "1:290031732132:web:3936df72e3964e7cb0ed31",
  measurementId: "G-6JJDT1RDY0"

  // key for formtest
  // apiKey: "AIzaSyAiLmWFfPHT6ZRhNeoOekrUoz9vIAIaVoc",
  // authDomain: "formtest-e4a5d.firebaseapp.com",
  // databaseURL: "https://formtest-e4a5d.firebaseio.com",
  // projectId: "formtest-e4a5d",
  // storageBucket: "formtest-e4a5d.appspot.com",
  // messagingSenderId: "471545512581",
  // appId: "1:471545512581:web:c9a0175172ea8c31c0dfec",
  // measurementId: "G-SB5XHZ57KJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export default firebase;
