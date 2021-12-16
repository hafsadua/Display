// import firebase from ‘firebase’;
// const config = {
//     apiKey: "AIzaSyCbzuNfaTMBFud6hspb2guxPqi7FQQ2zc4",
//     authDomain: "teacher-s-evaluator-system.firebaseapp.com",
//     databaseURL: "https://teacher-s-evaluator-system-default-rtdb.firebaseio.com",
//     projectId: "teacher-s-evaluator-system",
//     storageBucket: "teacher-s-evaluator-system.appspot.com",
//     messagingSenderId: "254306115001",
//     appId: "1:254306115001:web:3271bab1ccfd7b670dea68",
//     measurementId: "G-8BH7NNC37W"
// };
// firebase.initializeApp(config);
// export default firebase;

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCbzuNfaTMBFud6hspb2guxPqi7FQQ2zc4",
    authDomain: "teacher-s-evaluator-system.firebaseapp.com",
    databaseURL: "https://teacher-s-evaluator-system-default-rtdb.firebaseio.com",
    projectId: "teacher-s-evaluator-system",
    storageBucket: "teacher-s-evaluator-system.appspot.com",
    messagingSenderId: "254306115001",
    appId: "1:254306115001:web:3271bab1ccfd7b670dea68",
    measurementId: "G-8BH7NNC37W
});

const db = getFirestore();