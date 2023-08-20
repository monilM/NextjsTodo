import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ-KLbeqty4Mn4w9I7oy9FRJO2fYf6FVs",
  authDomain: "react-todo-f06c9.firebaseapp.com",
  projectId: "react-todo-f06c9",
  storageBucket: "react-todo-f06c9.appspot.com",
  messagingSenderId: "398601406348",
  appId: "1:398601406348:web:481cfb5540df6dbb7eb8a9",
  measurementId: "G-W4H8C19BDP",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app); // Initialize Firestore




export { auth, firestore };
