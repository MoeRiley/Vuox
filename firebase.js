import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyALSf-2lFqxrYN1w4OjuwMCc5g8L-9LnZY",
  authDomain: "hs-test-1294c.firebaseapp.com",
  databaseURL: "https://hs-test-1294c-default-rtdb.firebaseio.com",
  projectId: "hs-test-1294c",
  storageBucket: "hs-test-1294c.appspot.com",
  messagingSenderId: "263012084896",
  appId: "1:263012084896:web:00351fb70b81b96e07adc5",
  measurementId: "G-B6MYQW6ER7",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const firestore = getFirestore(app);

export { app, firestore };
