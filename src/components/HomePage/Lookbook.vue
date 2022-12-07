<template>
   <hr class="container">
  <div class="looks">
     <div class="look-box" v-motion-slide-visible-once-left>
      <div class="look__img"><img src="../../img/lookbook-1.png" alt=""></div>
      <div class="look__content">
         <h2 class="look__title">men’s <span>lookbook</span></h2>
         <p class="look__description">Lorem ipsum dolor sit amet eras facilisis
      consectetur adipiscing elit lor, integer lorem consecteur dignissim laciniqui.
      Elementum metus facilisis ut phasellu.</p>
         <router-link to="/products" @click="defineCurrent('Mens', 'casual & formal', '')" class="btn-look btn">view now</router-link>
      </div>
     </div>
     <div class="look-box" v-motion-pop-visible-once>
      <div class="look__img"><img src="../../img/lookbook-2.png" alt=""></div>
      <div class="look__content">
         <h2 class="look__title">women’s <span>lookbook</span></h2>
         <p class="look__description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames .
Pellentesque laoreet quis enim et mattis. Quisque interdum felis tellus.</p>
         <router-link to="/products" @click="defineCurrent('Womens', 'casual & formal', '')" class="btn-look btn">view now</router-link>
      </div>
     </div>
     <div class="look-box" v-motion-slide-visible-once-right>
      <div class="look__img"><img src="../../img/lookbook-3.png" alt=""></div>
      <div class="look__content">
         <h2 class="look__title">your <span>lookbook</span></h2>
         <p class="look__description">See an item you like and click the f08a button to add it to your lookbook where you can create your own perfect look.
It’s like your own boutique!.</p>
         <router-link to="/products" @click="defineCurrent('Unisex', 'casual & formal', '')" class="btn-look btn">view now</router-link>
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

<style lang="sass">
hr
   color: #eeeeee81
   z-index: -2

.looks
   display: flex
   justify-content: space-between
   margin: 0 auto
   margin-top: 60px
   margin-bottom: 120px
   max-width: 1320px
.look-box
   background-color: #f8f8f8
   width: 32%
   height: 500px
   display: flex
.look
   &__img
      position: relative
      width: 63%
      margin: 10px
      margin-bottom: 0
      img
         position: absolute
         top: 0
         left: 0
         width: 100%
         height: 100%
         object-fit: fit
   &__content
      text-align: right
      margin-right: 30px
      margin-top: 40px
      width: 37%
   &__title
      font-family: Montserrat
      font-size: 30px
      line-height: 54px
      font-weight: 700
      text-transform: uppercase
      color: #575153
      span
         font-weight: 300
   &__description
      margin-top: 10px
      font-family: Roboto
      font-size: 12px
      line-height: 22px
      font-weight: 400
      color: #727272
      height: 135px
      
.btn-look
   margin-top: 40px
   transition: .4s
   text-decoration: none
   display: block
   padding-right: 40px!important
</style>