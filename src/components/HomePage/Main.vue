<template>
  <Intro/>
  <MainNavBar />
  <Itembook/>
  <Lookbook/>
</template>


<style>

</style>

<script>
import MainNavBar from './Main-nav-bar.vue';
import Itembook from './Itembook.vue';
import Lookbook from './Lookbook.vue';
import Intro from './Intro.vue';
export default {
    components: { MainNavBar, Itembook, Lookbook, Intro }
}
</script>
