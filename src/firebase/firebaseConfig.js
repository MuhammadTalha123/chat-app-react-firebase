import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZO7zYJnrfIfJOUP7rT4XzwQb2n3Mw2aQ",
    authDomain: "chat-app-firebase-react.firebaseapp.com",
    projectId: "chat-app-firebase-react",
    storageBucket: "chat-app-firebase-react.appspot.com",
    messagingSenderId: "219306622004",
    appId: "1:219306622004:web:197c8fd0b41fed22915e61"
  };
export const app = firebase.initializeApp(firebaseConfig);