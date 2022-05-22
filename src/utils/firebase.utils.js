// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,

} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc, getDocFromCache } from 'firebase/firestore'

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
export const db = getFirestore(); //singleton, access to firestore db

// create new user doc in DB from user auth (ie provider)
export const createUserDocumentFromAuth = async (userAuth, addInfo={}) => {
  if (!userAuth) return;

  // if doesnt exists, will create a pointer for you to create db entry
  const userDocRef = doc(db, 'users', userAuth.uid);  // db, collection name, doc name 

  const userSnapshot = await getDoc(userDocRef);

  // create doc if doesnt exist
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addInfo
      })

    } catch (e) {
      console.log('error creating user: ', e)
    }
  }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}
