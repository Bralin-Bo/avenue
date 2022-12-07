import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import 'firebase/auth'
import 'firebase/database'


const app = initializeApp(
   {
      apiKey: "AIzaSyAl6UosblhsqRMlJGwBFkZtBKVLfsJfXBM",
      authDomain: "test-c4e9e.firebaseapp.com",
      projectId: "test-c4e9e",
      storageBucket: "test-c4e9e.appspot.com",
      messagingSenderId: "815297249103",
      appId: "1:815297249103:web:0881ce4b2d90b059e80f3a"
   }
);
const db = initializeFirestore(app, {
   experimentalForceLongPolling: true, // this line
   useFetchStreams: false, // and this line
})
export {
   db
}