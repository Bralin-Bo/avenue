<template>
   <div class="signin-intro">
      <h1 class="signin-intro__title">{{titleFocus}} <span>{{title}}</span></h1>
      <p class="signin-intro__title signin-intro__subtitle">{{subtitle}} <span style="color:#00c8c8">{{product}}</span></p>
   </div>
</template>

<script>
export default {
   props:{
    titleFocus:{},
    title:{},
    subtitle:{},
    product:{}
  }
}
</script>

<style lang="sass">
.signin-intro
   height: 450px
   background-image: url("../img/bg.png")
   background-size: 100% 450px
   background-repeat: no-repeat
   text-align: center
   &__title
      padding-top: 150px
      font-size: 50px
      line-height: 48px
      font-weight: 700
      text-transform: uppercase
      letter-spacing: 0.05em
      color: #ffffff
      span
         font-weight: 300
   &__subtitle
      padding-top: 30px
      font-weight: 300
      font-size: 30px
</style>