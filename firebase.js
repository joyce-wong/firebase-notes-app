import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBo-S4SrguoudEIOuA9HeYuqu8qSdBLpYY",
  authDomain: "react-notes-cee17.firebaseapp.com",
  projectId: "react-notes-cee17",
  storageBucket: "react-notes-cee17.appspot.com",
  messagingSenderId: "47741558317",
  appId: "1:47741558317:web:39e723083eb1115272a2a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const notesCollection = collection(db, "notes")