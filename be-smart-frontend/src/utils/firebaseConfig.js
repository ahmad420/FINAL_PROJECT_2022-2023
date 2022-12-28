// Import the functions you need from the SDKs you need
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
const app = firebase.initializeApp({
  apiKey: "asdf",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
});

export const auth = app.auth();
export default app;
