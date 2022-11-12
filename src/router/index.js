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
      path: '/product', name: 'product', component: function () {
         return import('../components/Product/Product.vue')
      }
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes
})

export default router


