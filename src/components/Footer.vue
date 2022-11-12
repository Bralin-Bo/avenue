<template>
  <footer>
      <Links/>
      <Awards/>
      <FooterOfFooter/>
  </footer>
</template>

<script>
import Links from './Footer/Links.vue';
import Awards from './Footer/Awards.vue';
import FooterOfFooter from './Footer/Footer-of-footer.vue';
export default {
    components: { Links, Awards, FooterOfFooter }
}
</script>

<style lang="sass">
footer
   background-color: #f8f8f8
</style>