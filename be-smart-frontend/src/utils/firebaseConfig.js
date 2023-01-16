import firebase from "firebase/app";
import "firebase/auth";
import Firestore from 'firebase/firestore';
import { useState, useEffect } from "react"
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore"


const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_PUBLIC_API_KEY,
  authDomain: process.env.REACT_APP_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PUBLIC_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PUBLIC_APP_ID,
  measurementId: process.env.REACT_APP_PUBLIC_MEASUREMENT_ID,
});

export const auth = app.auth();
export default app;
const db = firebase.firestore(app)

export { db }