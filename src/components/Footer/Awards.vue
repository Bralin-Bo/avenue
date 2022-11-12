<template>
   <div class="awards container">
      <div class="award awards__box">
         <h3 class="award__title">award winner <span>fashion awards 2016</span></h3>
      </div>
      <div class="brands awards__box">
         <h3 class="brands__title">
            <font-awesome-icon icon="fa-brands fa-facebook" />
            <font-awesome-icon icon="fa-brands fa-twitter" />
            <font-awesome-icon icon="fa-brands fa-instagram" /> 
            <font-awesome-icon icon="fa-brands fa-pinterest" /></h3>
      </div>
  </div>
</template>

<style lang="sass">
.awards
   margin-top: 80px
   display: flex
   justify-content: space-between
   &__box
      width: 570px
      height: 200px
      display: flex
      flex-direction: column
      text-align: center   
      justify-content: center

      font-size: 33px
      line-height: 48px
      text-transform: uppercase
      letter-spacing: 0.05em
      color: #ffffff
.award
   margin-right: 30px
   background-color: #333333

   &__title
      font-family: Montserrat
      span
         font-weight: 300
.brands
   background-color: #00c8c8
   &__title
      padding: 150px
      font-family: Montserrat
      display: flex
      justify-content: space-between
</style>