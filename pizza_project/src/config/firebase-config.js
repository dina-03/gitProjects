import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8dZ6cnnT7K1ahoy0jQvnvEwlzTig9eTQ",
    authDomain: "menuorder-f378c.firebaseapp.com",
    projectId: "menuorder-f378c",
    storageBucket: "menuorder-f378c.appspot.com",
    messagingSenderId: "1097040238955",
    appId: "1:1097040238955:web:6b815e7047b72cdc67542e"
};

// Initialize Firebase
export const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);