<template>
  <div class="footer__links container">
     <div class="links-box">
        <div class="links">
            <h2 class="links__title">information</h2>
            <router-link to="/brand" class="links__link">The brand</router-link>
            <router-link to="/localstores" class="links__link">Local stores</router-link>
            <a href="#" class="links__link">Customer service</a>
            <a href="#" class="links__link">Privacy & cookies</a>
            <a href="#" class="links__link">Site map</a>
        </div>
        <div class="links">
            <h2 class="links__title">why buy from us</h2>
            <a href="#" class="links__link">Shipping & returns</a>
            <a href="#" class="links__link">Secure shopping</a>
            <a href="#" class="links__link">Testimonials</a>
            <router-link to="/brand" class="links__link">Award winning</router-link>
            <router-link to="/brand" class="links__link">Ethical trading</router-link>
        </div>
        <div class="links">
            <h2 class="links__title">your account</h2>
            <router-link to="/signin" class="links__link">Sign in</router-link>
            <router-link to="/signin" class="links__link">Register</router-link>
            <a href="#" class="links__link">View cart</a>
            <a href="#" class="links__link">View your lookbook</a>
            <a href="#" class="links__link">Track an order</a>
            <a href="#" class="links__link">Update information</a>
        </div>
     </div>
     <div class="links">
         <h2 class="links__title">contact details</h2>
         <p class="links__link">Head Office: Avenue, <br>
            180-182 Regent Street, London</p>
         <p class="links__link">Telephone: 0123-456-789</p>
         <p class="links__link">Email: support@yourwebsite.com</p>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.footer
   &__links
      display: flex
      justify-content: space-between
      padding-top: 30px
.links-box
   display: flex
   
.links
   display: flex
   flex-direction: column
   margin-right: 60px
   &__title
      font-family: Montserrat
      font-size: 13px
      line-height: 20px
      font-weight: 400
      text-transform: uppercase
      color: #575153
   &__link
      font-family: Montserrat
      font-size: 14px
      line-height: 30px
      font-weight: 300
      color: #727272
      text-decoration: none
      &:hover
        color: #000


</style>