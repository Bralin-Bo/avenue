<template>
  <div class="products-nav container">
    <router-link to="/" class="products-nav__title"><strong>Avenue</strong> Fashion</router-link>
   </div>
  <div class="container product-list">
     <div class="product-list__title">
         <h1>{{store.current.gender}} {{store.current.style}} {{store.current.type}}</h1>
         <div style="display: flex">
            <div class="product-list__search">
               <input v-model="search" type="text" placeholder="Search...">
            </div>
            <div class="select">
               <select v-model="sort" name="type">
                  <option selected value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="lprice">Cheapest</option>
                  <option value="hprice">Expensive</option>
                  <option value="Aname">From a-z</option>
                  <option value="Zname">From z-a</option>
               </select>
               <span class="focus"></span>
            </div>
         </div>
      </div>
      <hr>
     <div class="product-list__content">
      <Filter class="product-list__item1"/>
      <Content class="product-list__item2" :page="page" :sort="sort" :search="search"/>
     </div>
      <div class="products-pages" v-if="store.loaded">
         <div class="products-pages__item" v-for="i in Math.ceil(store.getFilter(search).length/20)" :key="i">
            <button @click="changePage(i)" class="btn btn--page">{{i}}</button>
         </div>
      </div>
  </div>
</template>
<style lang="sass">
.products-pages
   justify-content: center
   display: flex
.btn--page
   padding: 20px 30px
</style>
<style>
.products-nav {
  z-index: 2;
  margin-top: 30px!important;
  height: 50px;
  display: flex;
  justify-content: center;
  background-color: transparent;
}
.products-nav__title {
  text-transform: uppercase;
  font-size: 50px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
}
</style>
<style lang="sass">
.product-list
   margin-top: 50px
   margin-bottom: 70px
   &__title
      display: flex
      justify-content: space-between
      hr
         margin-top: 10px
   &__content
      display: flex
      margin-top: 15px
   &__item1
      width: 20%
   &__item2
      width: 80%
   &__search
      margin-right: 30px
      input
         width: 350px
         padding: 10px
         border: 2px solid #000
         border-radius: 5px
</style>
<script>
import NavBar from '../Header/Nav-bar.vue';
import Content from './Content.vue';
import Filter from './Filter.vue';
export default {
    components: { NavBar, Content, Filter },
    data(){
      return{
         page: 0,
         sort: 'newest',
         search:''
      }
   },
   methods:{
      changePage(i){
         this.page = i-1
         window.scrollTo({
            top: 0,
            behavior: 'smooth'
         });
      }
   }
}
</script>
<script setup>
import { useClothesStore } from '../../stores/clothes';
const store = useClothesStore()

</script>