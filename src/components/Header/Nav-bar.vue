<template>
  <div class="nav">
    <router-link to="/" class="nav__title"><strong>Avenue</strong> Fashion</router-link>
    <div class="nav__links">
      <div class="nav__link-box">
        <div style="padding-bottom: 10px">
          <router-link to="/products" @click="defineCurrent('Mens', 'casual & formal', '')" class="nav__link" >
            Mens
            <font-awesome-icon class="angle" icon="fa-solid fa-angle-down" transform="left-50 down-15 grow-2"/>
          </router-link>
        </div>
        <div class="nav__content link-content">
          <div class="link-content__links">
            <div class="link-content__casual">
              <h4 class="link-content__title">Casual</h4>
              <router-link to="/products" @click="defineCurrent('Mens', 'casual', 'jackets')" class="link-content__link">Jackets</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'casual', 'hoodies')" class="link-content__link">Hoodies & Sweatshirts</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'casual', 'shirts')" class="link-content__link">Shirts</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'casual', 'sports wears')" class="link-content__link">Sportswear</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'casual', 'trousers')" class="link-content__link">Trousers & Chinos</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'casual', 't-shirts')" class="link-content__link">T-Shirts</router-link>
            </div>
            <div class="link-content__formal">
              <h4 class="link-content__title">Formal</h4>
              <router-link to="/products" @click="defineCurrent('Mens', 'formal', 'jackets')" class="link-content__link">Jackets</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'formal', 'shirts')" class="link-content__link">Shirts</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'formal', 'suits')" class="link-content__link">Suits</router-link>
              <router-link to="/products" @click="defineCurrent('Mens', 'formal', 'trousers')" class="link-content__link">Trousers</router-link>
            </div>
          </div>
          <div class="link-content__autumn">
            <p class="link-content__sale">Autumn sale! up to 50% off</p>
          </div>
        </div>
      </div>
      <div class="nav__link-box">
        <div style="padding-bottom: 10px">
          <router-link to="/products" class="nav__link" @click="defineCurrent('Womens', 'casual & formal', '')">
            Womens
            <font-awesome-icon class="angle" icon="fa-solid fa-angle-down" transform="left-75 down-15 grow-2"/> 
            <!--  transform="left-80 down-15 grow-2" -->
          </router-link>
        </div>
        <div class="nav__content link-content">
              <div class="link-content__links">
              <div class="link-content__casual">
                <h4 class="link-content__title">Casual</h4>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 'jackets')" class="link-content__link">Jackets</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 'hoodies')" class="link-content__link">Hoodies & Sweatshirts</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 'shirts')" class="link-content__link">Shirts</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 'sports wears')" class="link-content__link">Sportswear</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 'trousers')" class="link-content__link">Trousers & Chinos</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 't-shirts')" class="link-content__link">T-Shirts</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 'dresses')" class="link-content__link">Dresses</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'casual', 'skirts')" class="link-content__link">Skirts</router-link>
              </div>
              <div class="link-content__formal">
                <h4 class="link-content__title">Formal</h4>
                <router-link to="/products" @click="defineCurrent('Womens', 'formal', 'jackets')" class="link-content__link">Jackets</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'formal', 'shirts')" class="link-content__link">Shirts</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'formal', 'suits')" class="link-content__link">Suits</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'formal', 'trousers')" class="link-content__link">Trousers</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'formal', 'dresses')" class="link-content__link">Dresses</router-link>
                <router-link to="/products" @click="defineCurrent('Womens', 'formal', 'skirts')" class="link-content__link">Skirts</router-link>
              </div>
              </div>
              <div class="link-content__autumn">
              <p class="link-content__sale">Autumn sale! up to 50% off</p>
              </div>
        </div>
      </div>
      <router-link to="/brand" class="nav__link">The brand</router-link>
      <router-link to="/localstores" class="nav__link">Local stores</router-link>
      <span class="search-box">
        <input v-model="search" @focusin="() => changeFocus(true)"  @focusout="()=>changeFocus(false)"
          type="text" placeholder="Search..." class="nav__search"/>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" transform="left-20"/>
        <div class="search__items" v-if="isFocuced">
          <div class="search__item" @click="()=>{
            search = '';
            $router.push(`/product/${e.id}`)}" 
            v-for="e in store.getSearch(search.toUpperCase())" :key="e.id"
          >
            <div class="search__img"><img :src="e.img" alt=""></div>
            <div class="search__content">
              <h4 class="search__name">{{e.name}}</h4>
              <p class="search__price">{{e.price}}</p>
            </div>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>
<script setup>
import {ref} from 'vue'
import { useClothesStore } from '../../stores/clothes';
const store = useClothesStore()
const search = ref('')
const isFocuced = ref(false)

function changeFocus(bool){
  setTimeout(() => {
    isFocuced.value = bool
  }, 500);
  
}

function defineCurrent(gender, style, type){
  store.current.gender = gender
  store.current.style = style
  store.current.type = type
}
</script>
<style>
.nav {
  z-index: 2;
  margin-top: 30px!important;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
}
.nav__title {
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
}
.nav__links{
  display: flex;
  align-items: start;
  height: 50px;
}
.nav__link-box{
  position: relative;
}
.nav__link {
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  margin-right: 30px;
  font-size: 13px;
  transition: .4s;
  display: block;
}
.nav__link-box:hover .nav__link{
  color: #21cece;
  cursor: pointer;
}
.nav__link:hover{
  color: #21cece;
}
.angle{
  transition: 0.4s;
}
.nav__link-box:hover .angle{
  transform: rotate(180deg);
}
.nav__content{
  z-index: 3;
  position: absolute;
  top: 40px;  
  width: 300px;
  height: 400px;
  background-color: #f8f8f8;
  box-shadow: 0px 17px 24px 0px rgba(0,0,0,0.14);
  /* opacity: 0; */
  visibility: hidden;
  transition: .1s;
}
.nav__link-box:hover .nav__content{
  /* opacity: 1; */
  visibility: visible;
}
.nav__search{
  padding: 5px;
  font-size: 13px;
}

.link-content{
  padding: 30px;
}
.link-content__links{
  display: flex;
}
.link-content__casual{
  display: inline-flex;
  flex-direction: column;
  margin-right: 50px;
}
.link-content__formal{
  display: flex;
  flex-direction: column;
}
.link-content__title{
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #575153;
  margin-bottom: 10px;
}
.link-content__link{
  font-size: 15px;
  line-height: 30px;
  font-weight: 300;
  color: #727272;
  text-decoration: none;
}
.link-content__link:hover{
  color: #000;
}

.link-content__autumn{
  width: 100%;
  height: 140px;
  background-color: #333333;
  text-align: center;
  margin-top: 10px;
}
.link-content__sale{
  color: #fff;
  font-size: 30px;
  padding-top: 25px;
  line-height: 48px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.search__items{
  position: relative;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
}
.search__item{
  box-sizing: border-box;
  background-color: #e2e2e2;
  width: 100%;
  padding: 10px;
  display: flex;
  border: 1px solid #c4c4c4;
  cursor: pointer;
  transition: .4s;
}
.search__item:hover{
  background-color: #c4c4c4;
}
.search__img{
  position: relative; 
  margin-right: 20px;
  width: 50px;
  height: 60px;
  background-color: gray;
}
.search__img img{
  position: absolute; 
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.search__name{
  width: 90px;
  text-overflow: ellipsis; 
  overflow: hidden;
}
.search__price{
  margin-top: 10px;
}
</style>