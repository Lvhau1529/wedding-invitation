import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBi6H2sxMfemeYqM2NqCQzKXJfaTNNkGE0",
  authDomain: "wedding-invitation-22a35.firebaseapp.com",
  projectId: "wedding-invitation-22a35",
  storageBucket: "wedding-invitation-22a35.firebasestorage.app",
  messagingSenderId: "731112192717",
  appId: "1:731112192717:web:81fbb602d0b0cff218c784",
  measurementId: "G-4BTXMEM7TK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);