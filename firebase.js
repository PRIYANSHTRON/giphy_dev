// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DLwkOIYHDFWOfq3Iy58S8hk_tcb-7Uk",
  authDomain: "giphy-app-83cba.firebaseapp.com",
  projectId: "giphy-app-83cba",
  storageBucket: "giphy-app-83cba.appspot.com",
  messagingSenderId: "68988673455",
  appId: "1:68988673455:web:b712680f5f6ecb639e235a"
};

// Initialize Firebase
// export const app = initializeApp(firebaseConfig);
export const app = getApps().length ? getApps() : initializeApp(firebaseConfig);
export const auth = getAuth(app)