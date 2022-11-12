<template>
   <div class="container sign-box">
      <div class="signin sign">
         <h2 class="sign-box__title">sign in</h2>
         <form action="#">
            <input class="sign__input" type="text" placeholder="Your Email..">
            <input class="sign__input" type="text" placeholder="Your password..">
            <button class="btn">SIGN IN</button>
         </form>
      </div>
      <div class="sign-box__divider"></div>
      <div class="signup sign">
         <h2 class="sign-box__title">register</h2>
         <form action="#">
            <input class="sign__input" type="text" placeholder="Your Email..">
            <input class="sign__input" type="text" placeholder="Your password..">
            <input class="sign__input" type="text" placeholder="Confirm password..">
            <input class="sign__check" type="checkbox" name="checkbox" id="">
            <label for="checkbox" class="checkbox-label">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</label>
            <div class="sign__bot">
               <button class="btn sign__btn">CREATE ACCOUT</button>
               <label for="btn" class="sign__label">By clicking ‘Create Account’, you agree to our <a href="">Privacy Policy</a></label>
            </div>
         </form>
      </div>
   </div>
</template>

<style lang="sass">
.sign-box
   display: flex
   justify-content: space-around
   margin-top: 60px
   margin-bottom: 100px
   &__title
      font-size: 18px
      line-height: 20px
      font-weight: 400
      text-transform: uppercase
      color: #575153
      margin-bottom: 45px
   &__divider
      border-left: 1px solid #eeeeee
.sign
   width: 100%
   margin: 0 50px
   &__input
      padding: 5px
      width: 100%
      height: 40px
      margin-bottom: 34px
      border: 1px solid #e7e7e7
      font-size: 15px
      line-height: 22px
      font-weight: 300
      color: #989898
   &__check
      width: 24px
      height: 24px
      background-color: rgba(51,51,51,0.0)
      border: 1px solid #e7e7e7
      margin-bottom: 30px
   &__bot
      width: 100%
      display: flex
   &__label
      font-family: Roboto
      font-size: 15px
      line-height: 22px
      font-weight: 400
      color: #8e8c8c

      margin-left: 30px
      a
         text-decoration: none
         color: #00c8c8
.checkbox-label
   margin-left: 10px
   font-family: Roboto
   font-size: 13px
   line-height: 22px
   font-weight: 400
   color: #8e8c8c
</style>