import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD5szggRBDgDAyonH02Q00Chk95sGYIwyM",
    authDomain: "custom-qr-code.firebaseapp.com",
    projectId: "custom-qr-code",
    storageBucket: "custom-qr-code.appspot.com",
    messagingSenderId: "535355571929",
    appId: "1:535355571929:web:309bdee54da72e5af208c8",
    measurementId: "G-GKQLQRMH6G"
};

export const app = initializeApp(firebaseConfig);