import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const envImport = import.meta.env;

const firebaseConfig = {
  apiKey: envImport.VITE_API_FIREBASE_API_KEY,
  authDomain: envImport.VITE_API_FIREBASE_AUTH_DOMAIN,
  projectId: envImport.VITE_API_FIREBASE_PROJECT_ID,
  storageBucket: envImport.VITE_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envImport.VITE_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: envImport.VITE_API_FIREBASE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore();

export { auth, storage, db };
