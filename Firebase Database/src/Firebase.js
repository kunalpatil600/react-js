// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbCBI6Xn05afsc-jhIGI-DOObUoAIfkmA",
  authDomain: "database-68bbe.firebaseapp.com",
  projectId: "database-68bbe",
  storageBucket: "database-68bbe.appspot.com",
  messagingSenderId: "892520052709",
  appId: "1:892520052709:web:b0548380e32aaffe98a10c",
  measurementId: "G-Y9STVWB8CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();