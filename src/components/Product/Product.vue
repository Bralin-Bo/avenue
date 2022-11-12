<template>
   <NavBar class="container"/>
   <Intro :titleFocus="'Product'" :title="'View'" :subtitle="'mens - casual - hoodie & sweatshirts - '" :product="'AVE classic sweatshirts'"/>
   <Content/>
</template>

<script>
import NavBar from '../Header/Nav-bar.vue'
import Intro from '../Intro.vue'
import Content from './Content.vue'
export default {
  components: { NavBar, Intro, Content },
   
}
</script>NavBar