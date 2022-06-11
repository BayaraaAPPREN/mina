// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDPCh4x0cNnHLvT3-hxeiX7jK5Ib-drhmE",
    authDomain: "skinlaundry-af34f.firebaseapp.com",
    projectId: "skinlaundry-af34f",
    storageBucket: "skinlaundry-af34f.appspot.com",
    messagingSenderId: "785850577591",
    appId: "1:785850577591:web:7ae12c9dc62af1b5ca1332",
    measurementId: "G-LK57F1LM8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider, storage };

