// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDGfR6DCz9ilpHvN5ugTYewVLmjErNV3BY",
  authDomain: "h2olock-5dc47.firebaseapp.com",
  projectId: "h2olock-5dc47",
  storageBucket: "h2olock-5dc47.appspot.com",
  messagingSenderId: "31107550729",
  appId: "1:31107550729:web:9daf5ddf1bd2da4eb332d8",
  measurementId: "G-0ZQ91SRF15"
};

const firebaseapp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseapp)
const auth = getAuth(firebaseapp);

export { db, auth };