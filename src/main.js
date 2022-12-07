import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueTheMask from 'vue-the-mask'
import { MotionPlugin } from '@vueuse/motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faAngleDown, faShoppingCart, faLocationDot, faPhone, faLink, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
library.add(faMagnifyingGlass, faAngleDown, faShoppingCart, faLocationDot, faPhone, faLink, faEnvelope, faClock, faTwitter, faFacebook, faInstagram, faPinterest)

const pinia = createPinia()

createApp(App)
   .component('font-awesome-icon', FontAwesomeIcon)
   .use(router)
   .use(pinia)
   .use(VueTheMask)
   .use(MotionPlugin)
   .mount('#app')

