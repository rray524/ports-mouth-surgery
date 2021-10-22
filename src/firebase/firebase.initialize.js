import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const fireBaseInit = () => {
    initializeApp(firebaseConfig);
}

export default fireBaseInit;