import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHr_QL1zOFrRTqtxBt4EzDLUR6ypFQb5w",
  authDomain: "tienda-productos-16755.firebaseapp.com",
  projectId: "tienda-productos-16755",
  storageBucket: "tienda-productos-16755.firebasestorage.app",
  messagingSenderId: "994341821393",
  appId: "1:994341821393:web:9c15e459c06361e1739ef0"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);