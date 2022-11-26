import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Initialize Firebase
const app = initializeApp ({
  apiKey: "AIzaSyBnivcfsUNgPMbI-B3kqa-G5QxJh8GUT58",
  authDomain: "todo-a5fb5.firebaseapp.com",
  projectId: "todo-a5fb5",
  storageBucket: "todo-a5fb5.appspot.com",
  messagingSenderId: "76116227535",
  appId: "1:76116227535:web:8d04ea3ad03cd44d28ceba",
  measurementId: "G-0DSRHQXKBY"
});

const storage = getStorage(app);
export default storage;