// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH-W74II6H-xvpaVk_HI9NPTTBQa5LZWQ",
  authDomain: "react-ecom-c0453.firebaseapp.com",
  projectId: "react-ecom-c0453",
  storageBucket: "react-ecom-c0453.appspot.com",
  messagingSenderId: "71960923986",
  appId: "1:71960923986:web:d9cb2b91dcf242ab24f48b"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
