<template>
   <NavBar class="container"/>
   <div class="container cart ">
      <h1>In the Cart</h1>
      <h2>Total: £{{totalPrice}}</h2>
      <div class="cart__box" v-if="(store.loaded && store.cart.length>0)">
         <div class="cart-content" >
            <div class="cart-content__item" v-for="i in store.cart" :key="i.id">
               <div class="cart-content__img"><img :src=i.img alt=""></div>
               <div class="cart-content__body">
                  <p class="cart-content__price">{{i.price}}</p>
                  <h4 class="cart-content__name">{{i.name}}</h4>
               </div>
               <div>
                  <button class="btn cart-btn" @click="()=>delCartItem(i)">X</button>
               </div>
            </div>
         </div>

         <div class="cart-payment">
            <form @submit.prevent>
               <h2 class="cart-payment__title">Please Fill the Form</h2>
               <input required class="cart-payment__input" type="email" placeholder="Email">
               <select class="cart-payment__input cart-payment__select">
                  <option value="fd">Country</option>
               </select>
               <select class="cart-payment__input cart-payment__select">
                  <option value="fd">City</option>
               </select>
               <input required class="cart-payment__input" type="text" placeholder="Street">
               <hr style="color:#fff;margin-bottom:15px">
               <input required v-mask="'#### #### #### ####'" class="cart-payment__input" type="text" placeholder="Card Number">
               <div class="cart-payment__divider">
                  <input required v-mask="'##/##'" class="cart-payment__input cart-payment__input--half" type="text" placeholder="MM/YY">
                  <input required v-mask="'###'" class="cart-payment__input cart-payment__input--half" type="text" placeholder="SVG">
               </div>
               <div>
                  <input required class="cart-payment__check" type="checkbox">
                  <label class="cart-payment__label" for="checkbox">Agree with licence</label>
               </div>
               <button class="btn cart-btn-payment">Submit</button>
            </form>
         </div>
      </div>
      <div class="loading" v-else>
         <h2 style="margin-top:30px; font-size:50px">Nothing in the Cart</h2>
      </div>
   </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import { useClothesStore } from '../../stores/clothes';
const store = useClothesStore()
const totalPrice = ref(0)
onMounted(async ()=>{
   await store.loaded
   countPrice()
})
function countPrice(){
   totalPrice.value=0
   store.cart.forEach(e=>{totalPrice.value += parseFloat(e.price.slice(1))})
}
function delCartItem(i){
   store.cart = store.cart.filter(e => e != i)
   localStorage.setItem("cart", JSON.stringify(store.cart))
   countPrice()
}
</script>
<script>
import NavBar from '../Header/Nav-bar.vue';
import {mask} from 'vue-the-mask'
export default {
  directives: {mask}
}
</script>

<style lang="sass">
.cart
   margin-top: 70px
   margin-bottom: 70px
   text-align: center
   &__box
      display: flex
      margin-top: 30px
.cart-content
   width: 40%
   background-color: #f8f8f8
   &__item
      box-sizing: border-box
      padding: 20px
      display: flex
      justify-content: space-between
      border: 5px solid #00c8c8
      border-radius: 8px
   &__img
      min-width: 100px
      height: 130px
      background-color: gray
      margin-right: 10px
      position: relative
      img
         position: absolute
         top: 0
         left: 0
         width: 100%
         height: 100%
         object-fit: cover
   &__body
      text-align: left
      max-width: 200px
      word-wrap: break-word
      text-overflow: ellipsis
      overflow: hidden
   &__name
      font-size: 20px
   &__price
      font-size: 25px
      
.cart-payment
   box-sizing: border-box
   width: 60%
   background-color: #00c8c8
   box-shadow: 20px 20px 30px 10px #008a8a
   border-radius: 10px
   padding: 30px
   &__title
      margin-bottom: 20px
      color: #ffffff
   &__input
      padding: 5px
      width: 58%
      height: 30px
      margin-bottom: 15px
      border: 1px solid #e7e7e7
      font-size: 15px
      line-height: 22px
      font-weight: 300
      color: #000
      &--half
         width: 25%
         margin-right: 20px
   &__divider
      width: 60%
      margin: 0 auto
      display: flex
      justify-content: space-between
   &__select
      width: 60%
   &__check
      margin-right: 10px
   &__label
      color: #fff

.cart-btn-payment
   margin-top: 15px
   width: 58%
   border-color: #fff
   color: #fff
   &:hover
      background-color: #fff
      color: #00c8c8
.cart-btn
   margin-left: 10px
   min-width: 50px
   padding: 13px
   padding-left: 15px
   &:hover
      background-color: red
      border-color: red

</style>