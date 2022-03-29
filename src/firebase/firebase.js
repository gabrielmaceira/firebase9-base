import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { getStorage } from "firebase/storage";

//firebaseconfig
const firebaseConfig = {
  apiKey: "AIzaSyANWPMlPBX7oTDeDQF9BxYdJrVyd9XmUoA",
  authDomain: "testing-b26bd.firebaseapp.com",
  projectId: "testing-b26bd",
  storageBucket: "testing-b26bd.appspot.com",
  messagingSenderId: "433422944379",
  appId: "1:433422944379:web:00d2f8fa56240842ae3ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const storage = getStorage(app);

export default db;