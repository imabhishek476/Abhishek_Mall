// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs6q5klCohFfJKg6rr4AZW_ydb_ncnIqM",
  authDomain: "myfirstecommerce-e85d5.firebaseapp.com",
  projectId: "myfirstecommerce-e85d5",
  storageBucket: "myfirstecommerce-e85d5.appspot.com",
  messagingSenderId: "165907444630",
  appId: "1:165907444630:web:3d9b4d3ef33e3aac4323b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}