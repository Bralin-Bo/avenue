<template>
  <div class="container create-box">
      <form action="#" @submit.prevent="onSubmit" class="create">
         <h2>Add new clothes</h2>
         <hr>
         <input required v-model="data.name" type="text"  class="the-input" placeholder="Name">
         <input required v-model="data.body" type="text" class="the-input" placeholder="Desription">
         <input required v-model="data.price" type="text" class="the-input" placeholder="Price">
         <input required v-model="data.img" type="url" class="the-input" placeholder="Image src">
         <div>
            <h3 class="create__label">Gender:</h3>
            <input v-model="data.gender[0]" class="create__check" type="checkbox" name="men" id=""><label for="checkbox" class="checkbox-label">Men</label>
            <input v-model="data.gender[1]" class="create__check" type="checkbox" name="women" id=""><label for="checkbox" class="checkbox-label">Women</label>
         </div>
         <div>
            <h3 class="create__label">Style:</h3>
            <input v-model="data.style[0]" class="create__check" type="checkbox" name="Casual" id=""><label for="checkbox" class="checkbox-label">Casual</label>
            <input v-model="data.style[1]" class="create__check" type="checkbox" name="Formal" id=""><label for="checkbox" class="checkbox-label">Formal</label>
         </div>
         <h3 class="create__label">Type:</h3>
         <div class="select">
            <select v-model="data.type" name="type">
               <option value="dresses">Dresses</option>
               <option value="hoodies">Hoodies</option>
               <option value="jackets">Jackets</option>
               <option value="shirts">Shirts</option>
               <option value="skirts">Skirts</option>
               <option value="sports wears">Sports Wears</option>
               <option value="suits">Suits</option>
               <option value="t-shirt">T-shirt</option>
               <option value="trousers">Trousers</option>
            </select>
            <span class="focus"></span>
         </div>
        <button class="btn sign__btn">ADD New cloth</button>
      </form>
  </div>
</template>
<script setup>
import { db } from '../../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import {ref } from 'vue'
const data = ref({id:'', name:'',body:'',price:'',img:'', type:'', gender: [false, false], style:[false, false]})
async function onSubmit(){
   data.value.id = Date.now().toString();
   let gender
   let style

   if(data.value.gender[0] && data.value.gender[1] || !data.value.gender[0] && !data.value.gender[1]) gender = 'Unisex';
   else if(data.value.gender[0]) gender = 'Mens';
   else gender = 'Womens';
   
   if(data.value.style[0] && data.value.style[1] || !data.value.style[0] && !data.value.style[1]) style = 'casual & formal';
   else if(data.value.style[0]) style = 'casual';
   else style = 'formal';

   await setDoc(doc(db, "Clothes", data.value.id), {
      name: data.value.name,
      body: data.value.body,
      price: "£" + data.value.price,
      img: data.value.img,
      type: data.value.type,
      gender: gender,
      style: style
   });
   data.value ={id:'', name:'',body:'',price:'',img:'',type:'', gender: [false, false], style:[false, false]}
}




</script>
<style lang="sass">
.create-box
   margin: 50px auto

.create
   display: block
   hr
      margin: 30px 0
   &__label
      margin-bottom: 10px

   &__check
      width: 24px
      height: 24px
      background-color: rgba(51,51,51,0.0)
      border: 1px solid #e7e7e7
      margin-bottom: 30px
.checkbox-label
   margin-left: 10px
   margin-right: 20px
   font-family: Roboto
   font-size: 20px
   line-height: 22px
   font-weight: 400
   color: #8e8c8c
</style>
<style lang="scss">
:root {
  --select-border: #777;
  --select-focus: blue;
  --select-arrow: var(--select-border);
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;

  z-index: 1;

  &::-ms-expand {
    display: none;
  }

  outline: none;
}

.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;
   margin-bottom: 20px;
  select,
  &::after {
    grid-area: select;
  }

  min-width: 15ch;
  max-width: 30ch;

  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

  // Custom arrow
  &:not(.select--multiple)::after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}

select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--select-focus);
  border-radius: inherit;
}

select[multiple] {
  padding-right: 0;
  height: 6rem;

  option {
    white-space: normal;

    // Only affects Chrome
    outline-color: var(--select-focus);
  }
}

</style>