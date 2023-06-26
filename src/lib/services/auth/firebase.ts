// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp104F9JhgzriRjXuCTksPVpOXc-URwJg",
  authDomain: "app.plannlyhealth.com",
  projectId: "plannly-6c19a",
  storageBucket: "plannly-6c19a.appspot.com",
  messagingSenderId: "240416965034",
  appId: "1:240416965034:web:bd0ff1ea31f7080db2abd3",
  measurementId: "G-73NLEK4E3Q"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}

export default app;


