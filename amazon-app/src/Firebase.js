// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD24ZbwUzYOFthl8Ov0xKSaYX5-jpKJQGs",
  authDomain: "app-df8aa.firebaseapp.com",
  projectId: "app-df8aa",
  storageBucket: "app-df8aa.appspot.com",
  messagingSenderId: "301257522717",
  appId: "1:301257522717:web:6bfc9737010da9bd3710f4",
  measurementId: "G-LCPZJH6VDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };

export default firebase;
