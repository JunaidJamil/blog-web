// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl1ia2SCONrzCwaMru9pTYT_MkuYw6t08",
  authDomain: "signup-dd96b.firebaseapp.com",
  databaseURL: "https://signup-dd96b-default-rtdb.firebaseio.com",
  projectId: "signup-dd96b",
  storageBucket: "signup-dd96b.appspot.com",
  messagingSenderId: "77269160744",
  appId: "1:77269160744:web:3a0aff55d4d82fcd7bb61d",
  measurementId: "G-V05ZWRJ28Z"
};


// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const  db = getFirestore(app);
export const storage = getStorage(app);