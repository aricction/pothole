import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAERSnrRM2Wmy20plbUrQLlGOgdDgVvxqU",
  authDomain: "livepothole-detector.firebaseapp.com",
  projectId: "livepothole-detector",
  storageBucket: "livepothole-detector.appspot.com",
  messagingSenderId: "928958534062",
  appId: "1:928958534062:web:b1ce9187d26b1ead06783f",
  measurementId: "G-1GJWLTM34E"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export {auth,fs,storage}