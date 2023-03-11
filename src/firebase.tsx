import "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyACiHk9APp4V2R9t2gAAoBQ9mtnhy60guU",
    authDomain: "nussu-finsec-dummy.firebaseapp.com",
    projectId: "nussu-finsec-dummy",
    storageBucket: "nussu-finsec-dummy.appspot.com",
    messagingSenderId: "713809092318",
    appId: "1:713809092318:web:62318c9b8a1399366a2c4f"
  };
  
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();