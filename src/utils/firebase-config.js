import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyB7PGO9bjdUknbsf67F9UCUHd-7iblgUeQ",
    authDomain: "talent-fest-3ea36.firebaseapp.com",
    databaseURL: "https://talent-fest-3ea36.firebaseio.com",
    projectId: "talent-fest-3ea36",
    storageBucket: "talent-fest-3ea36.appspot.com",
    messagingSenderId: "1010477729783",
    appId: "1:1010477729783:web:d7cb2795bf09aaec95d0f2"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();