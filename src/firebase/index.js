import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import 'firebase/auth'
import 'firebase/database'


const app = initializeApp(
   {
      apiKey: "AIzaSyDAPqALfM3xjg7II0tjg7GL6s73mKXRxEs",
      authDomain: "vue-crm-e3928.firebaseapp.com",
      databaseURL: "https://vue-crm-e3928.firebaseio.com",
      projectId: "vue-crm-e3928",
      storageBucket: "vue-crm-e3928.appspot.com",
      messagingSenderId: "251307374581"
   }
);
const db = initializeFirestore(app, {
   experimentalForceLongPolling: true, // this line
   useFetchStreams: false, // and this line
})
export {
   db
}