// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF795m_xuBb63wn8OS1N5y7QOqzCm1MuI",
  authDomain: "kaisaurkko-4852a.firebaseapp.com",
  projectId: "kaisaurkko-4852a",
  storageBucket: "kaisaurkko-4852a.appspot.com",
  messagingSenderId: "352426569684",
  appId: "1:352426569684:web:1cc305e283b3ccb18f3041",
  measurementId: "G-09YJMDRSLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);