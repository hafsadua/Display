// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyCbzuNfaTMBFud6hspb2guxPqi7FQQ2zc4",
    authDomain: "teacher-s-evaluator-system.firebaseapp.com",
    databaseURL: "https://teacher-s-evaluator-system-default-rtdb.firebaseio.com",
    projectId: "teacher-s-evaluator-system",
    storageBucket: "teacher-s-evaluator-system.appspot.com",
    messagingSenderId: "254306115001",
    appId: "1:254306115001:web:3271bab1ccfd7b670dea68",
    measurementId: "G-8BH7NNC37W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


