import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAd4RHzW77efqAO_sh4XdWimNg1TznpfgA",
    authDomain: "gestion-garde-malade.firebaseapp.com",
    projectId: "gestion-garde-malade",
    storageBucket: "gestion-garde-malade.appspot.com",
    messagingSenderId: "311808759521",
    appId: "1:311808759521:web:ebd3a15b0896d4fa2e89a0",
    measurementId: "G-R9Y82XB27X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
