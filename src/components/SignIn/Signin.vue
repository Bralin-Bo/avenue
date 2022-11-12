<template>
  <NavBar class="container"/>
  <Intro :titleFocus="'Welcome'" :title="'to ave'" :subtitle="'sign in or register'"/>
  <Signupin/>
</template>

<script>
import Intro from '../Intro.vue';
import NavBar from '../Header/Nav-bar.vue';
import Signupin from './signupin.vue';
export default {
    components: { Intro, NavBar, Signupin }
}
</script>

<style>

</style>