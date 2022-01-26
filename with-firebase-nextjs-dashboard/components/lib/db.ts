import firebase from "firebase";
import firebaseConfig from "../configFirebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
export default db;
