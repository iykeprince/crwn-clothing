import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB7yKcFw6ia79qhZjT7gsbU8roQrdzDHXc",
  authDomain: "crwn-db-26fd8.firebaseapp.com",
  databaseURL: "https://crwn-db-26fd8.firebaseio.com",
  projectId: "crwn-db-26fd8",
  storageBucket: "crwn-db-26fd8.appspot.com",
  messagingSenderId: "860234015934",
  appId: "1:860234015934:web:ea25c4e35ab3e40e98eaef",
  measurementId: "G-1TMVY487JM",
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;