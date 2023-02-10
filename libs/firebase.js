import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgnWHQ_iEibeOh2k561zvKEBIUPxmXZLQ",
  authDomain: "personal-portfolio-websi-a35e5.firebaseapp.com",
  projectId: "personal-portfolio-websi-a35e5",
  storageBucket: "personal-portfolio-websi-a35e5.appspot.com",
  messagingSenderId: "410211204705",
  appId: "1:410211204705:web:3a7197482e0bd1e1813420",
  measurementId: "G-NVEDQKSK6M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
