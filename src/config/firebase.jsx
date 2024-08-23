// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Y8gbx4LXsElkuPa_Y2cdbdZEdHJWqqU",
  authDomain: "login-3ecc3.firebaseapp.com",
  projectId: "login-3ecc3",
  storageBucket: "login-3ecc3.appspot.com",
  messagingSenderId: "242933146595",
  appId: "1:242933146595:web:db077ba8460112fb1cb6d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;