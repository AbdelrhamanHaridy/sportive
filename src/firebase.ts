// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVKjWF2KNxn-Txe2ikdoqka0Yo1fcdwxc",
  authDomain: "to-do-list-a20ff.firebaseapp.com",
  projectId: "to-do-list-a20ff",
  storageBucket: "to-do-list-a20ff.appspot.com",
  messagingSenderId: "258198349869",
  appId: "1:258198349869:web:fb2071d9e6f5328caef0a4"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

