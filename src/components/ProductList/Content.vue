<template>
  <div class="product-grid"  v-if="(store.loaded&& store.data.length>0)">
   <div class="product-grid__item" 
      v-for="i in store.getFilter(search).sort(sortBy).slice(20*page, 20*page+20)" 
      :key="i.id"
      @click="$router.push(`/product/${i.id}`)">
      <div class="product-grid__img"><img :src=i.img></div>
      <div class="product-grid__bot">
         <h3>{{i.name}}</h3>
         <p>{{i.price}}</p>
      </div>
   </div>
  </div>
  <div class="loading" v-else>
    <img src="../../img/load.gif" alt="">
  </div>
</template>
<script>
export default{
   props:{
      page:{},
      sort:{},
      search:{}
   },
   methods:{
      sortBy(a, b){
         if(this.sort == 'lprice') return this.sortPrice(a,b, true)
         else if(this.sort == 'hprice') return this.sortPrice(a,b, false)
         else if(this.sort == 'newest') return this.sortDate(a,b, true)
         else if(this.sort == 'oldest') return this.sortDate(a,b, false)
         else if(this.sort == 'Aname') return this.sortName(a,b, true)
         else if(this.sort == 'Zname') return this.sortName(a,b, false)
      },
      sortPrice(a,b, reversed){
         if(reversed)
            return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))
         else return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))
      },
      sortDate(a,b, reversed){
         if(reversed)
            return parseInt(b.id) - parseInt(a.id)
         else return parseInt(a.id) - parseInt(b.id)
      },
      sortName(a,b, reversed){
         if (a.name < b.name)
            if (reversed) {
               return -1;
            }
            else return 1;
         if (a.name > b.name)
            if (reversed) {
                  return 1;
               }
            else return -1
         return 0;
      }
   }
}
</script>
<script setup>
import { useClothesStore } from '../../stores/clothes';
const store = useClothesStore()
</script>
<style lang="sass">
.product-grid
   background-color: #fff
   padding: 30px 0
   display: grid
   grid-template-columns: repeat(4, 190px)
   grid-template-rows: 300px
   gap: 50px
   justify-content: center
   
   &__item
      cursor: pointer
      border-top-left-radius: 20px
      border-top-right-radius: 20px
      border-bottom-left-radius: 20px
      border-bottom-right-radius: 20px
      box-shadow: 0px 20px 30px 5px rgba(0,0,0,0.30)
      transition: .4s
      &:hover
         box-shadow: 0px 20px 30px 10px rgba(0,0,0,0.60)
         transform: scale(1.03)
         
   &__img
      position: relative
      height: 230px
      border-top-left-radius: 15px
      border-top-right-radius: 15px
      border: 3px solid #dbdbdb
      border-bottom: 0px solid #000
      img
         position: absolute
         top: 0
         left: 0
         width: 100%
         height: 100%
         object-fit: cover
         border-top-left-radius: 10px
         border-top-right-radius: 10px
   &__bot
      height: 70px
      background-color: #dbdbdb
      color: #8f8d8e
      text-align: center
      padding-top: 10px
      border-bottom-right-radius: 10px
      border-bottom-left-radius: 10px
      border: 3px solid #dbdbdb
      border-top: 0px solid #000
</style>