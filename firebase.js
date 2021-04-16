import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDA8q5OycGuMf2lHcwgjUYKDndMDIy0AiU",
  authDomain: "whatsapp-2-144e9.firebaseapp.com",
  projectId: "whatsapp-2-144e9",
  storageBucket: "whatsapp-2-144e9.appspot.com",
  messagingSenderId: "691653467901",
  appId: "1:691653467901:web:cc9f9e06e12095ca866894",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
