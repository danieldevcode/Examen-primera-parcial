// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC97VVcczTKnSKEGfsueEmibzPHp62ORYI",
  authDomain: "proyecto1-bdd0c.firebaseapp.com",
  projectId: "proyecto1-bdd0c",
  storageBucket: "proyecto1-bdd0c.appspot.com",
  messagingSenderId: "100388157788",
  appId: "1:100388157788:web:6d05e8f11f7dab0854e999",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Authentication
export const authentication = getAuth(app);

//Firestore
export const db = getFirestore(app);
