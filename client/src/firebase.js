// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate1-7ccb6.firebaseapp.com",
  projectId: "mern-estate1-7ccb6",
  storageBucket: "mern-estate1-7ccb6.appspot.com",
  messagingSenderId: "486212744690",
  appId: "1:486212744690:web:64f721bd77b8e93952676b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);