// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtmYAKobVHQ059V83yZsN8NRRNQkucffY",
    authDomain: "sportive-2daa7.firebaseapp.com",
    projectId: "sportive-2daa7",
    storageBucket: "sportive-2daa7.appspot.com",
    messagingSenderId: "1082675055412",
    appId: "1:1082675055412:web:2d7ac0bce067c4a4dc3361"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

