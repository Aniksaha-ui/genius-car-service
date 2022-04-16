// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlIYkJUT48zI1Rj9Hi3i_siyw-4v1grpQ",
  authDomain: "genius-car-service-205f4.firebaseapp.com",
  projectId: "genius-car-service-205f4",
  storageBucket: "genius-car-service-205f4.appspot.com",
  messagingSenderId: "29364513147",
  appId: "1:29364513147:web:0edf26bcee6667513535de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
