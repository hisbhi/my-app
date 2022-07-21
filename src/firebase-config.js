
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAgRqrnmJwe3eopIRDOaOHofNTa2rIW3U4",
  authDomain: "sgpgihis.firebaseapp.com",
  projectId: "sgpgihis",
  storageBucket: "sgpgihis.appspot.com",
  messagingSenderId: "672005797518",
  appId: "1:672005797518:web:ec41e439269b5d6f433bdf"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

