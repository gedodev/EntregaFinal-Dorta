import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCizulHuUtCPEkpmGPlzE6mh0dS6egNRG4",
    authDomain: "proyect-test-coder.firebaseapp.com",
    projectId: "proyect-test-coder",
    storageBucket: "proyect-test-coder.appspot.com",
    messagingSenderId: "970087472031",
    appId: "1:970087472031:web:cffd4b2d2c70e722b6fbaa"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);