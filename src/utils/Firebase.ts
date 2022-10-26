
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGopr21msaC_j-feY1q8S_aTWYJkIfVSQ",
  authDomain: "finansalapp.firebaseapp.com",
  projectId: "finansalapp",
  storageBucket: "finansalapp.appspot.com",
  messagingSenderId: "688457519634",
  appId: "1:688457519634:web:27162d3f0aece0f512fecb"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
