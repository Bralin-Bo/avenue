<template>
  <header>
    <div class="top-nav">
      <div class="top-nav__content">
        <div class="top-nav__auth">
          <router-link to="/signin" class="top-nav__links">Register</router-link>
          <router-link to="/signin" class="top-nav__links">Sign in</router-link>
        </div>
        <button class="top-nav__btn">
          <font-awesome-icon icon="fa-solid fa-shopping-cart" transform="left-17"/>
          empty
          <font-awesome-icon class="angle" icon="fa-solid fa-angle-down" transform="right-8 shrink-2"/>
        </button>
      </div>
    </div>
  </header>
</template>

<style>
.top-nav {
  height: 45px;
  background-color: #333;
  font-size: 15px;
}
.top-nav__content {
  max-width: 800px;
  margin: 0 auto;
  color: #6f6f6f;
  display: flex;
  justify-content: end;
}
.top-nav__auth {
  margin-top: 13px;
  margin-right: 30px;
  font-size: 13px;
}
.top-nav__links {
  color: #696969;
  text-decoration: none;
  margin-right: 20px;
  transition: .4s;
}
.top-nav__links:hover {
  color: #9e9e9e;
  text-decoration: underline;
}
.top-nav__btn {
  height: 45px;
  width: 150px;
  border-radius: 0;
  border: none;
  background-color: #00c8c8;
  color: #fff;
  font-size: 13px;
  transition: .4s;
}
.top-nav__btn:hover {
  cursor: pointer;
  background-color: #00dddd;
}
.top-nav__btn:active {
  background-color: #007c7c;
}
.top-nav__btn:hover .angle{
  transform: rotate(180deg);
}

</style>

<script>
import Intro from "./HomePage/Intro.vue";
import NavBar from "./Header/Nav-bar.vue";
export default {
  components: { Intro, NavBar },
};
</script>
