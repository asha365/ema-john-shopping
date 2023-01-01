// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhFNJOeGQ0ISjA3r1CykWdApepjAG14aY",
  authDomain: "ema-john-shopping-76e36.firebaseapp.com",
  projectId: "ema-john-shopping-76e36",
  storageBucket: "ema-john-shopping-76e36.appspot.com",
  messagingSenderId: "507068889746",
  appId: "1:507068889746:web:6e9d273ff5c2aa41a9c44b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;