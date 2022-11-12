<template>
  <div class="container brand">
      <div class="">
         <img src="../../img/brand_1.png" alt="" style="margin-bottom:40px;">
         <img src="../../img/brand_2.png" alt="">
         <div class="brand-info">
            <h3 class="brand-info__title">our values, vision and strategy</h3>
            <p class="brand-info__subtitle">The above image would be a great place for an advertising video</p>
            <p class="brand-info__text">Cras maximus venenatis malesuada. Nulla sagittis elit felis, ac facilisis quam ornare aliquam. Etiam cursus odio vitae dui dignissim, sed tempus lacus tincidunt et donec sapien velit, rhoncus eu nulla a, molestie tempus mi maecenas sagittis ornare. Pellentesque sapien mi, tincidunt nec magna vitae, volutpat elementum odioni lorem Aliquam tempor massa vitae augue mattis tempor id in ante ut augue erat, luctus eil.</p>
         </div>
      </div>
      <div class="brand__right">
         <div class="brand-info">
            <h3 class="brand-info__title">hand designed clothing</h3>
            <p class="brand-info__subtitle">established in 2013, avenue fashion Sed dictum elit vel sapien luctus eras</p>
            <p class="brand-info__text">Praesent feugiat malesuada tristique maecenas rhoncus diam eget quam vestibulim consectetur, id condimentum leo porttitor. Cum sociis natoque penatibus eta magnis disut parturient montes, nascetur ridiculus mus. Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum.</p>
         </div>
         <img src="../../img/brand_3.png" alt="">
         <div class="brand-info">
            <h3 class="brand-info__title">Ethical trading</h3>
            <p class="brand-info__subtitle">we oversee the working conditions of the people in the supply chain</p>
            <p class="brand-info__text">Nullam dapibus consectetur neque, faucibus porttitor purus iaculis sed. Aenean eras dapibus augue, eget dignissim dui maecenas et rhoncus mim, vel semper arcu loremPellentesque congue justo esteir pellentesque aliquet massa eget posuere tincidunt. Cras viverra ullamcorper nunc accumsan hendrerit. A link fa-long-arrow-right</p>
         </div>
         <div class="brand__brands">
            <img src="../../img/brand_4.png" alt="">
            <img src="../../img/brand_5.png" alt="">
            <img src="../../img/brand_6.png" alt="">
         </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass">
.brand
   display: flex
   justify-content: space-between
   margin-top: 30px
   margin-bottom: 100px
   div
      width: 100%
   &__right
      margin-top: 30px
   &__brands
      display: flex
      justify-content: space-between
      margin-top: 80px
.b
   background-color: blue
.r
   background-color: red
.brand-info
   margin-bottom: 40px
   &__title
      font-size: 18px
      font-weight: 400
      text-transform: uppercase
      color: #575153
      margin-bottom: 20px
      margin-top: 30px
   &__subtitle
      font-size: 13px
      font-weight: 400
      text-transform: uppercase
      color: #727272
      margin-bottom: 10px
   &__text
      font-family: Roboto
      line-height: 22px
      font-size: 15px
      font-weight: 400
      color: #8e8c8c
</style>