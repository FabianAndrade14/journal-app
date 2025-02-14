// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLGjkEURKQvPPVyIkwlWefMl6xLMo1rmA",
  authDomain: "react-redux-c5fe7.firebaseapp.com",
  projectId: "react-redux-c5fe7",
  storageBucket: "react-redux-c5fe7.firebasestorage.app",
  messagingSenderId: "684769163165",
  appId: "1:684769163165:web:13dcf099a48e8086c0a174",
  measurementId: "G-L8T7X9WH22"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const analytics = getAnalytics(app);

export const FirebaseDB = getFirestore( FirebaseApp );

