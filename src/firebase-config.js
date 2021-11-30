// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGKC6lgQmohC8j_aJ_u_D4XZVd5rReTdk",
  authDomain: "quiz-178de.firebaseapp.com",
  projectId: "quiz-178de",
  storageBucket: "quiz-178de.appspot.com",
  messagingSenderId: "779926646269",
  appId: "1:779926646269:web:7249da1697aa2772543d94",
  measurementId: "G-KP10DEQXJ4",
};

const app = initializeApp(firebaseConfig);

export const addUser = async (name) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      hs: 0,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateHs = async (name, hs) => {
  const userRef = doc(db, "users", name);
  await setDoc(userRef, { hs: hs }, { name: name });
};


export const db = getFirestore(app);
export const auth = getAuth(app);
