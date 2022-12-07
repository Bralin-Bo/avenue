import { useClothesStore } from '../stores/clothes'

import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";

let fbClothes = []
let isLoaded = false

async function loadDB() {
   const querySnapshot = await getDocs(collection(db, "Clothes"));
   querySnapshot.forEach((doc) => {
      const cloth = {
         id: doc.id,
         name: doc.data().name,
         body: doc.data().body,
         price: doc.data().price,
         img: doc.data().img,
         gender: doc.data().gender,
         style: doc.data().style,
         type: doc.data().type
      }
      fbClothes.push(cloth)
   });
}
function uploadPinia() {
   const store = useClothesStore()
   store.data = fbClothes
   store.loadCart()
   store.loaded = true
}
async function loadingDB() {
   await loadDB()
   uploadPinia()
}
export { loadingDB, loadDB, uploadPinia }