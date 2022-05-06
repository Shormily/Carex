import firebaseConfig from "./Firebase.config"
import { initializeApp } from "firebase/app";
const inisilizeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default inisilizeAuthentication;