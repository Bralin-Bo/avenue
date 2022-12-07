<template>
  <header>
    <div class="top-nav">
      <div class="top-nav__content">
        <div v-if="!logged" class="top-nav__auth">
          <router-link to="/signin" class="top-nav__links">Register</router-link>
          <router-link to="/signin" class="top-nav__links">Sign in</router-link>
        </div>
        <div v-else class="top-nav__auth">
          <p>You are signed in</p>
          <button @click="handleSignOut" class="btn-auth">Sign out</button>
        </div>
        <button @click="$router.push('/cart')" class="top-nav__btn">
          <font-awesome-icon icon="fa-solid fa-shopping-cart" transform="left-17"/>
          <span v-if="store.cart.length!=0">{{store.cart.length}} clothes </span>
          <span v-else>Empty</span>
          <font-awesome-icon class="angle" icon="fa-solid fa-angle-down" transform="right-8 shrink-2"/>
        </button>
      </div>
    </div>
  </header>
</template>

<style>
.btn-auth{
  padding: 10px!important;
  font-size: 15px!important;
  color: #fff!important;
  border: 2px solid #00c8c8;
  background-color: #00c8c8;
  text-transform: uppercase;
  transition: .4s;
  margin-left: 20px;
  margin-top: -15px;
}
.btn-auth:hover{
  background-color: #009797;
  border-color: #009797;
  color: #f8f8f8;
  cursor: pointer;
}
.btn-auth:active{
  background-color: transparent;
  border-color: #009797;
}
.top-nav {
  height: 45px;
  background-color: #333;
  font-size: 15px;
}
.top-nav__content {
  max-width: 800px;
  margin: 0 auto;
  color: #6f6f6f;
  display: flex;
  justify-content: end;
}
.top-nav__auth {
  margin-top: 13px;
  margin-right: 30px;
  font-size: 13px;
  display: flex;
}
.top-nav__links {
  color: #696969;
  text-decoration: none;
  margin-right: 20px;
  transition: .4s;
}
.top-nav__links:hover {
  color: #9e9e9e;
  text-decoration: underline;
}
.top-nav__btn {
  height: 45px;
  width: 150px;
  border-radius: 0;
  border: none;
  background-color: #00c8c8;
  color: #fff;
  font-size: 13px;
  transition: .4s;
}
.top-nav__btn:hover {
  cursor: pointer;
  background-color: #00dddd;
}
.top-nav__btn:active {
  background-color: #007c7c;
}
.top-nav__btn:hover .angle{
  transform: rotate(180deg);
}

</style>
<script setup>
import {onMounted, ref} from 'vue'
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { useClothesStore } from '../stores/clothes';
const store = useClothesStore()

const logged = ref(false)
let auth
onMounted(()=>{
  auth = getAuth();
  onAuthStateChanged(auth,(user)=>{
    if(user){
      logged.value = true
    }
    else logged.value = false
  })
})
function handleSignOut(){
  signOut(auth)
}
</script>
<script>
import Intro from "./HomePage/Intro.vue";
import NavBar from "./Header/Nav-bar.vue";
export default {
  components: { Intro, NavBar }
};
</script>
