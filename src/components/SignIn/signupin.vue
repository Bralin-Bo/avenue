<template>
   <div class="container sign-box">
      <div class="signin sign">
         <h2 class="sign-box__title">sign in</h2>
         <form action="#" @submit.prevent="signingIn">
            <input required v-model="signIn.email" class="the-input" type="email" placeholder="Your Email..">
            <input required v-model="signIn.pass" class="the-input" type="password" placeholder="Your password..">
            <button class="btn">SIGN IN</button>
            <h3 class="error-code">{{errorCodeIn}}</h3>
         </form>
      </div>
      <div class="sign-box__divider"></div>
      <div class="signup sign">
         <h2 class="sign-box__title">register</h2>
         <form action="#" @submit.prevent="signingUp">
            <input required v-model="signUp.email" class="the-input" type="text" placeholder="Your Email..">
            <input required v-model="signUp.pass" class="the-input" type="password" placeholder="Your password..">
            <input required
               v-model="signUp.check" :class="{'error': signUp.pass!=signUp.check}" class="the-input" type="password" placeholder="Confirm password..">
            <input required class="sign__check" type="checkbox" name="checkbox" id="">
            <label for="checkbox" class="checkbox-label">Sign up for exclusive updates, discounts, new arrivals, contests, and more!</label>
            <div class="sign__bot">
               <button class="btn sign__btn">CREATE ACCOUT</button>
               <label for="btn" class="sign__label">By clicking ‘Create Account’, you agree to our <a href="">Privacy Policy</a></label>
            </div>
            <h3 class="error-code">{{errorCode}}</h3>
         </form>
      </div>
   </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const router = useRouter()

const signUp = ref({email:'', pass:'', check:''})
const signIn = ref({email:'', pass:''})
const errorCode = ref('')
const errorCodeIn = ref('')

function signingIn(){
   signInWithEmailAndPassword(auth, signIn.value.email, signIn.value.pass)
   .then((userCredential) => {
       const user = userCredential.user;
       console.log(user);
       signIn.value = {email:'', pass:''}
       errorCodeIn.value = ''
       router.push('/')
   })
   .catch((error) => {
      switch(error.code){
         case "auth/invalid-email":
            errorCodeIn.value = 'Invalid email';
            break;
         case "auth/user-not-found":
            errorCodeIn.value = 'No accaunt with that email';
            break;
         case "auth/wrong-password":
            errorCodeIn.value = 'Incorrect password';
            break;
         default:
            errorCodeIn.value = 'Unexpected Error'
      }
   });
}

function signingUp(){
   if(signUp.value.pass!=signUp.value.check) return errorCode.value = 'Please confirm the password'
   if(signUp.value.pass.length<8) return errorCode.value = 'Please use at least 8 characters for the password'
   createUserWithEmailAndPassword(auth, signUp.value.email, signUp.value.pass)
   .then((userCredential) => {
       const user = userCredential.user;
       console.log(user);
       signUp.value = {email:'', pass:'', check:''}
       errorCode.value = ''
       router.push('/')
   })
   .catch((error) => {
      errorCode.value = error.message;
      const errorc = error.code;
      console.log(errorc);
   });
}
</script>

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

.error
   border-color: red
.error-code
   margin-top: 15px
   color: red
</style>