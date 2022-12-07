<template>
  <div class="products-filter">
    <!-- <button class="btn" @click="test">Test</button> -->
    <div class="products-filter__box">
      <h2>Gender</h2>
      <ProductCheckbox @changeCheck="changeCheck" :thelabel="'Mens'" :checked="gender[0]"/>
      <ProductCheckbox @changeCheck="changeCheck" :thelabel="'Womens'" :checked="gender[1]"/>
    </div>
    <div class="products-filter__box">
      <h2>Style</h2>
      <ProductCheckbox @changeCheck="changeCheck" :thelabel="'Formal'" :checked="style[0]"/>
      <ProductCheckbox @changeCheck="changeCheck" :thelabel="'Casual'" :checked="style[1]"/>
    </div>
    <h2>Type</h2>
    <div class="select">
      <select v-model="store.current.type" @change="selectedType" name="type">
        <option selected value="all">All</option>
        <option value="dresses">Dresses</option>
        <option value="hoodies">Hoodies</option>
        <option value="jackets">Jackets</option>
        <option value="shirts">Shirts</option>
        <option value="skirts">Skirts</option>
        <option value="sports wears">Sports Wears</option>
        <option value="suits">Suits</option>
        <option value="t-shirts">T-shirts</option>
        <option value="trousers">Trousers</option>
      </select>
      <span class="focus"></span>
    </div>
  </div>
</template>

<script>
import ProductCheckbox from './Product-checkbox.vue'
export default {
  components: { ProductCheckbox }
}
</script>
<script setup>
import { useClothesStore } from '../../stores/clothes';
const store = useClothesStore()
let gender =[false, false]
let style = [false, false]
function preloadCurrent(){
  if(store.current.gender === 'Mens')
    gender = [true, false]
  else if(store.current.gender === 'Womens')
    gender = [false, true]
  if(store.current.style === 'casual')
    style = [false, true]
  else if(store.current.style === 'formal')
    style = [true, false]

}
preloadCurrent()
function changeCheck(value){
    if(value == 'Mens') gender[0] = !gender[0];
    else if(value == 'Womens') gender[1] = !gender[1];
    else if(value == 'Formal') style[0] = !style[0];
    else if(value == 'Casual') style[1] = !style[1];
    
    if(gender[0] && gender[1] || !gender[0] && !gender[1]) store.current.gender = 'Unisex';
    else if(!gender[0]) store.current.gender = 'Womens';
    else store.current.gender = 'Mens';
    
    if(style[0] && style[1] || !style[0] && !style[1]) store.current.style = 'casual & formal';
    else if(!style[0]) store.current.style = 'casual';
    else store.current.style = 'formal';
}
function selectedType(e){
  if(e.target.value == 'all') store.current.type = '';
  else store.current.type = e.target.value;
}
</script>
<style lang="sass">
.products-filter
   background-color: #f8f8f8
   padding: 20px
   padding-right: 0px
   h2
    margin-bottom: 10px
   &__box
    margin-bottom: 20px
      
.products-checkbox
  &__check
    width: 15px
    height: 15px
    background-color: rgba(51,51,51,0.0)
    border: 1px solid #e7e7e7
  &__label
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

  min-width: 8ch;
  max-width: 10ch;

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