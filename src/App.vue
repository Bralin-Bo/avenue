
<template>
  <Header />
  <RouterView/>
  <Footer/>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/HomePage/Main.vue";
import Footer from "./components/Footer.vue";
import Intro from "./components/HomePage/Intro.vue";
export default {
  components: { Header, Main, Footer, Intro },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
body{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
*{
  margin: 0;
  padding: 0;
}
</style>
