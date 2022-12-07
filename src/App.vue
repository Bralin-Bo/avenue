
<template>
  <Header />
  <RouterView/>
  <Footer/>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/HomePage/Main.vue";
import Footer from "./components/Footer.vue";
import Intro from "./components/HomePage/Intro.vue";
export default {
  components: { Header, Main, Footer, Intro },
};
</script>
<script setup>
import { onMounted } from 'vue';
import {loadingDB } from './functions/loadingDB'
onMounted(async () => {
   loadingDB()
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
*{
  margin: 0;
  padding: 0;
}
.the-input{
  padding: 5px;
  width: 100%;
  height: 40px;
  margin-bottom: 34px;
  border: 1px solid #e7e7e7;
  font-size: 15px;
  line-height: 22px;
  font-weight: 300;
  color: #989898;
}
.btn{
  padding: 23px 33px;
  background-color: transparent;
  border: 2px solid #737373;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.2em;
  color: #454647;
  transition: .4s;
}
.btn:hover{
  background-color: #00c8c8;
  border-color: #00c8c8;
  color: #f8f8f8;
  cursor: pointer;
}
.btn:active{
  background-color: #009797;
  border-color: #009797;
}
.loading{
  margin: 0 auto;
  text-align: center;
}
</style>
