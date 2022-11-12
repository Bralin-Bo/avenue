<template>
   <NavBar class="container"/>
   <Intro :titleFocus="'The'" :title="'Brand'" :subtitle="'Company slogan goes here'"/>
   <Content/>
</template>

<script>
import Intro from '../Intro.vue'
import NavBar from '../Header/Nav-bar.vue';
import Content from './Content.vue';
export default {
  components: { Intro, NavBar, Content },
   
}
</script>