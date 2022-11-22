import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBkTxFq0Q8a1zVpvuXCblYC6fyWEKI6R40",
  authDomain: "devlinks-42baa.firebaseapp.com",
  projectId: "devlinks-42baa",
  storageBucket: "devlinks-42baa.appspot.com",
  messagingSenderId: "5441070739",
  appId: "1:5441070739:web:81ab61647a324bd4154f66",
  measurementId: "G-Y0L7EF7TKJ"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);

export { db, auth };
