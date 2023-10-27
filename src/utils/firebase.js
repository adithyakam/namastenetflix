// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvzpHKZfcnmxMGl7ZP677_iqGAAtdpFI8",
  authDomain: "namastenetflix-1f35a.firebaseapp.com",
  projectId: "namastenetflix-1f35a",
  storageBucket: "namastenetflix-1f35a.appspot.com",
  messagingSenderId: "105978918249",
  appId: "1:105978918249:web:d164de2dd30b6d8787b9f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
