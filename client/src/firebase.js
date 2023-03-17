import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfI6WmbUcSusbCC9fyMinfc1LkCtellPU",
  authDomain: "miniproject-7a14a.firebaseapp.com",
  projectId: "miniproject-7a14a",
  storageBucket: "miniproject-7a14a.appspot.com",
  messagingSenderId: "267332124502",
  appId: "1:267332124502:web:7bb687e9091dbe73fde0f7",
  measurementId: "G-H0KRMGDMP2"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
