<template>
  <div class="itembook" v-if="store.loaded">
    <div
      class="itembook__item" v-for="i in 6" 
      :key="store.data[i-1].id" 
      :class="{'big' : i==4 || i==3, 'hover': i==1 || i==2 || i==3}"
      @click="$router.push(`/product/${store.data[i-1].id}`)"
      v-motion-pop-visible-once>
      <Item :price="store.data[i-1].price"
        :imgsrc="store.data[i-1].img"
        :name="store.data[i-1].name" :body="store.data[i-1].body" />
    </div>
  </div>
  <div class="loading" v-else>
    <img src="../../img/load.gif" alt="">
  </div>
</template>

<script>
import Item from './Item.vue';
export default { components: { Item } }
</script>
<script setup>
import { useClothesStore } from '../../stores/clothes';
const store = useClothesStore()
</script>
<style lang="sass" scoped>
.itembook
  max-width: 1200px
  margin: 0 auto
  margin-top: 40px
  padding-bottom: 62px

  display: grid
  grid-template-columns: repeat(4, 270px)
  grid-template-rows: repeat(2, 180px) 100px repeat(2, 180px)
  gap: 30px
  justify-content: center
  &__item
    grid-row: span 2
    background-color: #f8f8f8
    position: relative
    transition: .4s
    &:hover
      box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.14)      
    &.hover
      z-index: 2
    &.big
      grid-column: span 2
      grid-row: span 3
</style>
<style>
.itembook__item:hover .item__description {
  transition-delay: .4s;
  opacity: 1;
  bottom: -100px
}
</style>