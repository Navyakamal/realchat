import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKDdiJCe1ql2TYdJUR2EHPZY_sttYhKLE",
  authDomain: "chat-demo-e0876.firebaseapp.com",
  projectId: "chat-demo-e0876",
  storageBucket: "chat-demo-e0876.appspot.com",
  messagingSenderId: "459072726896",
  appId: "1:459072726896:web:cebe6f5ca4cc884bc4d1b5"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
