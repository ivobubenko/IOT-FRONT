// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC39afKQVDYEmxdIS4zmAK4epL0cNtSh4k",
  authDomain: "iot-frontend-fd9c2.firebaseapp.com",
  projectId: "iot-frontend-fd9c2",
  storageBucket: "iot-frontend-fd9c2.appspot.com",
  messagingSenderId: "1076183647397",
  appId: "1:1076183647397:web:eb2a6d79b68923cde7394c",
  measurementId: "G-94Y6RTE97X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
