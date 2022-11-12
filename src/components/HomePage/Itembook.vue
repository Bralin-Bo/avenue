<template>
  <div class="itembook">
    <div class="itembook__item">
      <Item :price="'£89.99'" :imgsrc="'http://cdn.shopify.com/s/files/1/0255/2771/3878/collections/Crop_tops.jpg?v=1625063263'" :name="'White top'" :body="'Cute white top, casual style'"/>
    </div>
    <div class="itembook__item">
      <Item :price="'£47.50'" :imgsrc="'https://img1.exportersindia.com/product_images/bc-full/dir_126/3751370/formal-mans-shirt-2101102.jpg'" :name="'Man\'s shirt'" :body="'Best choice for formal events'"/>
    </div>
    <div class="itembook__item big">
      <Item :price="'£89.99'" :imgsrc="'https://pyxis.nymag.com/v1/imgs/05d/b15/f4c61238a24a34610ae3a41dede1df90a4-Gildan-black-tshirt.rsquare.w600.jpg'" :name="'Black T-shirt'" :body="'Nothing extra only minimalism'"/>
    </div>
    <div class="itembook__item big">
      <Item :price="'£69.95'" :imgsrc="'https://images.unsplash.com/photo-1603205319065-6ffbe8f0e5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2tpcnR8ZW58MHx8MHx8&w=1000&q=80'" :name="'Pink skirt'" :body="'Best choice with any look'"/>
    </div>
    <div class="itembook__item">
      <Item :price="'£29.95'"  :imgsrc="'https://img.ltwebstatic.com/images3_pi/2020/03/25/158512465436e762f16d967d6800debd80f8b1e30c.webp'" :name="'Jeans'" :body="'Great for coming autumn'"/>
    </div>
    <div class="itembook__item">
      <Item :price="'£34.79'" :imgsrc="'http://cdn.shopify.com/s/files/1/0258/7862/6349/products/Jacketformenbestquality.jpg?v=1663584397'" :name="'Jeans Jacket'" :body="'Makes you hot'"/>
    </div>
  </div>
</template>
<script>
import Item from './Item.vue';
export default{ components: { Item } }


</script>
<script setup>
import { onMounted } from 'vue';
import {db} from '../../firebase'
import { collection, getDocs } from "firebase/firestore";

onMounted(async ()=> {
  const querySnapshot = await getDocs(collection(db, "Clothes"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
})
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
      
    &.big
      grid-column: span 2
      grid-row: span 3
</style>
<style>
.itembook__item:hover .item__description{
transition-delay: .4s;
visibility: visible;
}
</style>