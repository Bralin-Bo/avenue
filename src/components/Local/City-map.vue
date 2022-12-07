<template>
  <div class="city-map">
      <div class="city-map__map">
         <iframe v-show="view === 0" src="https://yandex.ru/map-widget/v1/?um=constructor%3A116fa52dc31e655b4444eeec76efcb927431fff63f7defd23110b99a92d2e603&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
         <iframe v-show="view === 1" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aba7c6da8ec6a1685c5880b4841f6c81c49f7ef8adbfef831648b621fb2e5d2ca&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
         <iframe v-show="view === 2" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa8f50b8d0e9c79360f60380368c8ae0d30c3890fa9bbf0e0fdb51429d0117e3e&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      </div>
      <div class="city-map__content">
         <City 
         :title="data[view].title" 
         :subtitle="data[view].subtitle" 
         :text="data[view].text"
         />
         <ul class="city-map__list">
            <li><font-awesome-icon icon="fa-solid fa-location-dot" /> {{data[view].subtitle}}</li>
            <li><font-awesome-icon icon="fa-solid fa-phone" /> 0123-456-789</li>
            <li><font-awesome-icon icon="fa-solid fa-link" /> www.yourwebsite.com</li>
            <li><font-awesome-icon icon="fa-solid fa-envelope" /> support@yourwebsite.com</li>
            <li><font-awesome-icon icon="fa-solid fa-clock" /> Monday-Friday: 9am to 6pm | Saturday: 10am to 6pm | Sunday: 10am to 2pm</li>
         </ul>
      </div>
   </div>
</template>

<script>
import City from './city.vue'
export default {
  components: { City },
  data() {
    return {
      data: [
         {title:'London',
         subtitle:'180-182 Regent Street, London, W1B 5BT',
         text:'Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.',
         link:'https://yandex.ru/map-widget/v1/?um=constructor%3A116fa52dc31e655b4444eeec76efcb927431fff63f7defd23110b99a92d2e603&amp;source=constructor'},
         {title:'New York',
         subtitle:'109 Columbus Circle, New York, NY 10023',
         text:'Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.',
         link:'https://yandex.ru/map-widget/v1/?um=constructor%3Aba7c6da8ec6a1685c5880b4841f6c81c49f7ef8adbfef831648b621fb2e5d2ca&amp;source=constructor'},
         {title:'Paris',
         subtitle:'2133 Rue Saint-Honoré, 75001 Paris',
         text:'Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum ante ipsum primis in faucibus orcip luctus et ultrices posuere cubilia curae cras ligula.',
         link:'https://yandex.ru/map-widget/v1/?um=constructor%3Aa8f50b8d0e9c79360f60380368c8ae0d30c3890fa9bbf0e0fdb51429d0117e3e&amp;source=constructor'},
      ]
    }
  },
  props:{
      view: {}
  }
}
</script>

<style lang="sass">
.city-map
   display: flex
   margin: 0 auto
   margin-bottom: 100px
   background-color: #f8f8f8
   transition: .4s
   max-width: 1320px
   &__map
      width: 70%
      position: relative
      iframe
         position: absolute
   &__content
      width: 30%
      padding: 20px
   &__list
      margin-left: 10px
      list-style: none
      line-height: 24px
      font-size: 15px
      font-weight: 400
      color: #8e8c8c
</style>