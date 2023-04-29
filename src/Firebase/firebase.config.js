// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB80V7DLFN5e7mPbPvWR2i6vlQ-Yq1OLeY",
  authDomain: "dragon-news-dbe04.firebaseapp.com",
  projectId: "dragon-news-dbe04",
  storageBucket: "dragon-news-dbe04.appspot.com",
  messagingSenderId: "647281362880",
  appId: "1:647281362880:web:4470a45dfdfe382ec9aa25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;