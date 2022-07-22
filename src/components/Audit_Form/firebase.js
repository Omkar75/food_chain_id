// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCotwYeUEMO6cY1dYXMtDx4G6mC-3jFqfU",
  authDomain: "foodchainid-3f1bf.firebaseapp.com",
  projectId: "foodchainid-3f1bf",
  storageBucket: "foodchainid-3f1bf.appspot.com",
  messagingSenderId: "884926500953",
  appId: "1:884926500953:web:29b4193df1e46577bd6148",
  measurementId: "G-3DQRJNTH0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);



export default firebase;