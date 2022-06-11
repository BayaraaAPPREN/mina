  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBGJYJaku5FjJH-4bowtVBfQA3SErgW3DQ",
  authDomain: "mina-498b8.firebaseapp.com",
  projectId: "mina-498b8",
  storageBucket: "mina-498b8.appspot.com",
  messagingSenderId: "1077475056220",
  appId: "1:1077475056220:web:7cc1f55d4cecc6fce1a499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider, storage };

