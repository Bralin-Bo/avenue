import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMagnifyingGlass, faAngleDown, faShoppingCart, faLocationDot, faPhone, faLink, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
library.add(faMagnifyingGlass, faAngleDown, faShoppingCart, faLocationDot, faPhone, faLink, faEnvelope, faClock, faTwitter, faFacebook, faInstagram, faPinterest)

createApp(App)
   .component('font-awesome-icon', FontAwesomeIcon)
   .use(router)
   .mount('#app')

