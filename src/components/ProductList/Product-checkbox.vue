<template>
   <div class="products-checkbox">
      <input v-model="checked" @change="changeCheck" type="checkbox" class="products-checkbox__check">
      <label class="products-checkbox__label">{{thelabel}}</label>
    </div>
</template>
<script>
export default {
   props:{
      thelabel:{},
      checked:{}
   },
   methods:{
      changeCheck(){
         this.$emit("changeCheck", this.thelabel)
      }
   }
}
</script>