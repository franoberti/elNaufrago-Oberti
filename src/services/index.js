// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAafkHHBQ9LiT97bbLyBSUpG1oQ54p71WM",
  authDomain: "elnaufrago-cb9a4.firebaseapp.com",
  projectId: "elnaufrago-cb9a4",
  storageBucket: "elnaufrago-cb9a4.appspot.com",
  messagingSenderId: "20628735740",
  appId: "1:20628735740:web:44e6cbfe5c0a031c1af979"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db