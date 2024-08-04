import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3r2sI4e6cn_X8E6cFtH1P8_hiKI6sqQk",
  authDomain: "react-js-designs.firebaseapp.com",
  projectId: "react-js-designs",
  storageBucket: "react-js-designs.appspot.com",
  messagingSenderId: "823770999642",
  appId: "1:823770999642:web:e5e2bec90c937f689ce163",
  measurementId: "G-SXPQNE81YN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();