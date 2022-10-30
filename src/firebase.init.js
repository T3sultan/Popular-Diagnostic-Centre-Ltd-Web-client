// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjLxTtMTP9nESZzH1PprFCM3MXz8yd9A",
  authDomain: "popular-diagnostic-centre-ltd.firebaseapp.com",
  projectId: "popular-diagnostic-centre-ltd",
  storageBucket: "popular-diagnostic-centre-ltd.appspot.com",
  messagingSenderId: "130488247805",
  appId: "1:130488247805:web:5c6072c9aa3b38d364e594",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
