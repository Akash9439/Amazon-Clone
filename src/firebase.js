// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCy9_qInBohK1TMlnRnwsymenPpACJpErU",
    authDomain: "clone-93d7c.firebaseapp.com",
    projectId: "clone-93d7c",
    storageBucket: "clone-93d7c.appspot.com",
    messagingSenderId: "891551769173",
    appId: "1:891551769173:web:48b136d42173d372bf2adc",
    measurementId: "G-J8KTMG5RC2"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};