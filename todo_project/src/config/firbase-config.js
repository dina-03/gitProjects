//import firebase from "firebase/compat";
//import 'firebase/auth'
//import {initializeApp} from "firebase/firebase-app";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADNhiQGsN02HUwCUpRQU8MVbj9hK7_cN4",
    authDomain: "personaltodo-d48e4.firebaseapp.com",
    projectId: "personaltodo-d48e4",
    storageBucket: "personaltodo-d48e4.appspot.com",
    messagingSenderId: "372240948166",
    appId: "1:372240948166:web:587088465a8c2cc6ba70c7"
};

export const fb = initializeApp(firebaseConfig)
export const db = getFirestore(fb)
//export const fb = initializeApp(firebaseConfig);
//export const fbAuth = firebase.auth()