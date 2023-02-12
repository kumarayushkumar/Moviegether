import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8BeySRd0DyGebWpWA_V9k-ayuiHco6cw",
  authDomain: "moviegetherauth.firebaseapp.com",
  projectId: "moviegetherauth",
  storageBucket: "moviegetherauth.appspot.com",
  messagingSenderId: "593503283226",
  appId: "1:593503283226:web:a872e3cf38b2b28d4e49a3",
  measurementId: "G-GRQFRWBG7L"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export default getAuth()