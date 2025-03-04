// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoZitdM4QooW5AdfChkPySQ2hRhyXF4ls",
  authDomain: "blackboxbot-c73a0.firebaseapp.com",
  databaseURL: "https://blackboxbot-c73a0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blackboxbot-c73a0",
  storageBucket: "blackboxbot-c73a0.firebasestorage.app",
  messagingSenderId: "1009093960990",
  appId: "1:1009093960990:web:e2c1cea8803cebd2ef150f",
  measurementId: "G-18FLDV3SKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
