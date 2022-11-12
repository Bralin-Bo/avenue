<template>
   <NavBar class="container"/>
  <Intro :titleFocus="'Local'" :title="'stores'" :subtitle="'Find a store near you'"/>
  <Content/>
</template>

<script>
import NavBar from '../Header/Nav-bar.vue';
import Intro from '../Intro.vue';
import Content from './Content.vue';
export default {
    components: { NavBar, Intro, Content }
}
</script>