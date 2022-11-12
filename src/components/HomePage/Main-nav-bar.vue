<template>
  <div class="container">
     <div class="main-nav">
         <hr>
         <button class="main-nav__link active">popular</button>
         <button class="main-nav__link">new arrivals</button>
         <button class="main-nav__link">best sellers</button>
         <button class="main-nav__link">special offers</button>
         <button class="main-nav__link">coming soon</button>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
   max-width: 1200px;
   margin: 0 auto;
}
.main-nav{
   margin-top: 40px;
}
hr{
   margin-bottom: 40px;
   color: #eeeeee81;
}
.main-nav__link{
   text-transform: uppercase;
   text-decoration: none;
   border: none;
   font-size: 13px;
   font-weight: 400;
   color: #727272;
   background-color: transparent;
   margin-right: 50px;
   cursor: pointer;
   transition: .4s;
}
.main-nav__link:hover{
   color: #007a7a;
}
.main-nav__link.active{
   color: #00c8c8;
}
</style>