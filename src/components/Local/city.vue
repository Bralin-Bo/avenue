<template>
  <div class="city">
      <h3 class="city__title">{{title}}</h3>
      <p class="city__subtitle">{{subtitle}}</p>
      <p class="city__text">{{text}}</p>
      <button class="btn" v-if="bonus === 'btn'" @click="changeTabs">view details</button>
   </div>
</template>

<script>
export default {
   props:{
      title:{},
      subtitle:{},
      text:{},
      bonus:{}
   },
   methods:{
      changeTabs(){
         if (this.title === 'London') {
            this.$emit('tab', 0)
         }
         else if (this.title === 'New York') {
            this.$emit('tab', 1)
         }
         else if (this.title === 'Paris') {
            this.$emit('tab', 2)
         }
         // 
      }
   }
}
</script>

<style lang="sass">
.city
   max-width: 380px
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
      margin-bottom: 30px
</style>