import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1q2EU9pkPcu8E8WxZ_E9jf-aM9oGWO3U",
  authDomain: "image-gallery-dd0a0.firebaseapp.com",
  projectId: "image-gallery-dd0a0",
  storageBucket: "image-gallery-dd0a0.appspot.com",
  messagingSenderId: "585508996246",
  appId: "1:585508996246:web:9cbb0f6ab6538cf3ca6eb7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
