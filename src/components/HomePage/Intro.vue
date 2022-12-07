<template>
  <div class="intro">
    <div class="container intro-box">
      <NavBar/>
      <div class="title">
        <h1 class="title__text">A</h1>
        <h1 class="title__text">V</h1>
        <h1 class="title__text">E</h1>
      </div>
      <div class="intro-bot">
        <router-link to="/products" @click="defineCurrent('Unisex', 'casual & formal', '')" class="btn btn-intro">shop new collections</router-link>
      </div>
      <div class="bgman" v-motion :initial="{x:-100, opacity:0}" :enter="{x:0, opacity:1, transition: {delay: 500, duration: 1000},}">
          <img src="../../img/bgimg.png" alt="">
      </div>
    </div>
  </div>
</template>
<script setup>
import { useClothesStore } from '../../stores/clothes';
const store = useClothesStore()
function defineCurrent(gender, style, type){
  store.current.gender = gender
  store.current.style = style
  store.current.type = type
}
</script>
<style>
.intro {
  height: 900px;
  background-color: #f8f8f8;
}
.intro-box {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}


.title {
  z-index: 1;
  height: 100%;
  margin-top: 0px;
  font-size: 250px;
  display: flex;
  justify-content: space-around;
  color: #575153;
}
.intro-bot {
  z-index: 1;
  height: 150px;
  display: flex;
  justify-content: end;
  margin-bottom: 120px;
  margin-right: 160px;
}

.btn-intro{
  padding-top: 30px!important;
  text-decoration: none;
}
.bgman{
  position: absolute;
  z-index: 0;
  left: -120px;
  display: block;
  height: 700px;
}
.bgman img{
  object-fit: cover; 
  height: 900px;
}
</style>

<script>
import NavBar from '../Header/Nav-bar.vue';
export default { 
  components: { NavBar } };
</script>