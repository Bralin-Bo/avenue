<template>
   <NavBar class="container"/>
   <Content/>
</template>

<script>
import NavBar from '../Header/Nav-bar.vue';
import Content from './Content.vue';
export default {
  components: { NavBar, Content },
   
}
</script>