// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU5RJMyUMh_oRtWTltspKsNqqQaEa_5T0",
  authDomain: "the-news-dragon-4a12e.firebaseapp.com",
  projectId: "the-news-dragon-4a12e",
  storageBucket: "the-news-dragon-4a12e.appspot.com",
  messagingSenderId: "801344862216",
  appId: "1:801344862216:web:f5ff239a8b97b02d3679bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;