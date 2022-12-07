<template>
   <NavBar class="container"/>
   <div v-if="loaded">
     <Intro :titleFocus="'Product'" :title="'View'" 
     :subtitle="product.gender + ' - ' + product.style + ' - ' +  product.type + ' -  '" 
     :product="product.name"/>
     <Content :name="product.name" :body="product.body" :img="product.img" :price="product.price" :id="$route.params.id"/>
   </div>
   <div class="loading" v-else>
    <img src="../../img/load.gif" alt="">
  </div>
</template>

<script>
import NavBar from '../Header/Nav-bar.vue'
import Intro from '../Intro.vue'
import Content from './Content.vue'
export default {
  components: { NavBar, Intro, Content },
}
</script>
<script setup>
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase'
import {useRoute, onBeforeRouteUpdate } from "vue-router";
import { onMounted, ref } from 'vue'

const product = ref()
const loaded = ref(false)
const route = useRoute();

async function getProduct(id){
  const docRef = doc(db, "Clothes", id.toString());
  product.value = await getDoc(docRef);
  product.value = product.value.data();
  loaded.value = true
}

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    await getProduct(to.params.id)
  }
})
onMounted(async ()=>{
  await getProduct(route.params.id)
})
</script>