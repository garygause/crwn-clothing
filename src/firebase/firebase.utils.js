import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyByR9fjsLG6UASsrvbBlYKKH1tay4wXqI8",
  authDomain: "crwn-db-7946f.firebaseapp.com",
  projectId: "crwn-db-7946f",
  storageBucket: "crwn-db-7946f.appspot.com",
  messagingSenderId: "217024526493",
  appId: "1:217024526493:web:6dd0c76ae36b3689537c74",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
