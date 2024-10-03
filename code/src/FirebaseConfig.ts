// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaYuopBugpaAeAIcpmldr68pS2oDcQ_SY",
  authDomain: "ai-project-2d487.firebaseapp.com",
  projectId: "ai-project-2d487",
  storageBucket: "ai-project-2d487.appspot.com",
  messagingSenderId: "1026888194842",
  appId: "1:1026888194842:web:01df8255b2c16e33aceaa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)


