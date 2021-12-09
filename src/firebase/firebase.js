// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwzabpXFbAXiBo927IBjcoml_HWn9omX8",
  authDomain: "pruebatecnicados.firebaseapp.com",
  projectId: "pruebatecnicados",
  storageBucket: "pruebatecnicados.appspot.com",
  messagingSenderId: "690128366427",
  appId: "1:690128366427:web:59474ef85530ff4e3d487e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}