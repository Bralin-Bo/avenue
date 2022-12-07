import { defineStore } from "pinia";


export const useClothesStore = defineStore({
   id: 'clothes',
   state: () => ({ data: [], loaded: false, current: { gender: 'Unisex', style: 'casual & formal', type: '' }, cart: [] }),
   actions: {
      loadCart() {
         if (localStorage.getItem("cart")) {
            // console.log(this.$state.cart);
            this.$state.cart = JSON.parse(localStorage.getItem("cart"));
            console.log(this.$state.cart);
         }
         else
            console.log("no");
      },
      setCart(e) {
         localStorage.setItem("cart", JSON.stringify(e))
      }
   },
   getters: {
      filter: (state) => {
         let store = state.data
         if (state.current.type != '')
            store = state.data.filter(e => e.type == state.current.type)
         if (state.current.style != 'casual & formal')
            store = store.filter(e => e.style == state.current.style)
         if (state.current.gender != 'Unisex')
            store = store.filter(e => e.gender == state.current.gender)
         return store
      },
      getSearch: (state) => {
         return (search) => {
            if (search == '') return
            if (search == ' ') return
            return state.data.filter(e => e.name.toUpperCase().includes(search)).slice(0, 10)
         }
      },
      getFilter() {
         return (search) => {
            return this.filter.filter(e => e.name.toUpperCase().includes(search.toUpperCase()))
         }
      }
   }
})