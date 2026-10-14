import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-github-a341b.firebaseapp.com",
  projectId: "react-github-a341b",
  storageBucket: "react-github-a341b.appspot.com",
  messagingSenderId: "468849911843",
  appId: "1:468849911843:web:cb494cbeeb44afad39a996",
  measurementId: "G-NGKWTF9Z6G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;