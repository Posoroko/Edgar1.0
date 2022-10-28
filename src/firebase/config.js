import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAIwI0ZJKiwiP20x19Kc4afqBGcD4RSw1c",
    authDomain: "edgard-search.firebaseapp.com",
    projectId: "edgard-search",
    storageBucket: "edgard-search.appspot.com",
    messagingSenderId: "769757005",
    appId: "1:769757005:web:0dc476bf9d06b19f14b104",
    measurementId: "G-CWEJ92J2WP"
  };

  
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)


const db = getFirestore()

export { db, auth }