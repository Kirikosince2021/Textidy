// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkMv37xks74IAeBUWhRXZGxdK-IMVH-mc",
  authDomain: "textidy-acdc1.firebaseapp.com",
  projectId: "textidy-acdc1",
  storageBucket: "textidy-acdc1.appspot.com",
  messagingSenderId: "457286131876",
  appId: "1:457286131876:web:43cd1e800589319c8f4631",
  measurementId: "G-DLZBELXCKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);