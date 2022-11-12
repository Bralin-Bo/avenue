<template>
   <div class="cities container">
      <City 
         :title="'London'" 
         :subtitle="'180-182 Regent Street, London, W1B 5BT'" 
         :text="'Lorem ipsum dolor sit amet, consectetur adipiscing esi elit. Vivamus at arcu sem. Vestibulum ornare eleifendit massa, nec tempor odio. Fusce posuere nunc iaculis ligula viverra iaculis. Aliquam erat volutpat.'"
         :bonus="'btn'"   
         @tab="(i) => tab = i"
         
      />
      <City 
         :title="'New York'" 
         :subtitle="'109 Columbus Circle, New York, NY 10023'" 
         :text="'Nunc non posuere nisl. Etiam finibus vel dui nec lobortis. Aliquam egestas, sem quis condimentum venenatis, erat leo fermentum dolor, non sollicitudin massa mi eu nibh. Nullam vitae aliquam dui, non sodales nisl.'"
         :bonus="'btn'"   
         @tab="(i) => tab = i"
      />
      <City 
         :title="'Paris'" 
         :subtitle="'2133 Rue Saint-Honoré, 75001 Paris'" 
         :text="'Ut interdum fermentum blandit. Donec nec lacus egetit mi rhoncus eleifend. Curabitur laoreet nisl eget rutruml auctor. Vestibulum ante ipsum primis in faucibus orcip luctus et ultrices posuere cubilia curae cras ligula.'"
         :bonus="'btn'"   
         @tab="(i) => tab = i"
      />
   </div>
   <CityMap :view="tab"/>
</template>
<script>
import CityMap from './City-map.vue';
import City from './city.vue';
export default {
    components: { City, CityMap },
    data(){
      return{
         tab:0
      }
    },
    methosds:{
      changeTabs(i){
         console.log(i);
      }
    }
}
</script>
<style lang="sass">
.cities
   display: flex
   justify-content: space-between
   margin-top: 50px
   margin-bottom: 60px

</style>