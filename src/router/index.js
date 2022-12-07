import { createRouter, createWebHistory } from 'vue-router'
import Main from "../components/HomePage/Main.vue";

const routes = [
   { path: '/', name: 'home', component: Main },
   {
      path: '/signin', name: 'signin', component: function () {
         return import('../components/SignIn/Signin.vue')
      }
   },
   {
      path: '/brand', name: 'brand', component: function () {
         return import('../components/TheBrand/Brand.vue')
      }
   },
   {
      path: '/localstores', name: 'local', component: function () {
         return import('../components/Local/Local.vue')
      }
   },
   {
      path: '/product/:id', name: 'product', component: function () {
         return import('../components/Product/Product.vue')
      }
   },
   {
      path: '/create', name: 'create', component: function () {
         return import('../components/AddCloth/AddCloth.vue')
      }
   },
   {
      path: '/products', name: 'products', component: function () {
         return import('../components/ProductList/Main.vue')
      }
   },
   {
      path: '/cart', name: 'cart', component: function () {
         return import('../components/Cart/Cart.vue')
      }
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
   scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0, behavior: 'smooth' }
   }
})

export default router


