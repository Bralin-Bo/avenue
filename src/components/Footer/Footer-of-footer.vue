<template>
  <div class="footer">
      <div class="footer-box container">
        <p class="footer__copy">© 2016 Avenue Fashion™</p>
        <p class="footer__creator">Design by RobbyDesigns.com Dev by Bralin Bolat</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.footer
  margin-top: 50px
  height: 45px
  background-color: #333333
  &__copy
    padding-top: 10px
    font-family: Montserrat
    font-size: 13px
    line-height: 30px
    font-weight: 400
    color: #999999
  &__creator
    padding-top: 15px
    font-size: 13px
    line-height: 20px
    font-weight: 400
    color: #777777
.footer-box
  display: flex
  justify-content: space-between
</style>