// Import the functions you need from the SDKs you need
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWEE4GQ_zjoGFwRuC3zmFrkvY53FF8_j8",
    authDomain: "sportive-341de.firebaseapp.com",
    projectId: "sportive-341de",
    storageBucket: "sportive-341de.appspot.com",
    messagingSenderId: "874615624434",
    appId: "1:874615624434:web:6411946f3726d57bdcf66b"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

