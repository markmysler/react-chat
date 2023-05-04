// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAzBvDo7Q4l8_lUNnJT-aUTpjJy4X2gMyU",
	authDomain: "react-chat-5e8a4.firebaseapp.com",
	projectId: "react-chat-5e8a4",
	storageBucket: "react-chat-5e8a4.appspot.com",
	messagingSenderId: "509701696364",
	appId: "1:509701696364:web:c2f1f3e4f0463954aae149",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
