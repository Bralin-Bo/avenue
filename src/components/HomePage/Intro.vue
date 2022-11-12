<template>
  <div class="intro">
    <div class="container intro-box">
      <NavBar/>
      <div class="title">
        <h1 class="title__text">A</h1>
        <h1 class="title__text">V</h1>
        <h1 class="title__text">E</h1>
      </div>
      <div class="intro-bot">
        <button class="btn">shop men's collection</button>
      </div>
      <div class="bgman">
          <img src="../../img/bgimg.png" alt="">
      </div>
    </div>
  </div>
</template>

<style>
.intro {
  height: 900px;
  background-color: #f8f8f8;
}
.intro-box {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}


.title {
  z-index: 1;
  height: 100%;
  margin-top: 0px;
  font-size: 250px;
  display: flex;
  justify-content: space-around;
  color: #575153;
}
.intro-bot {
  z-index: 1;
  height: 150px;
  display: flex;
  justify-content: end;
  margin-bottom: 120px;
  margin-right: 160px;
}
.btn{
  padding: 23px 33px;
  background-color: transparent;
  border: 2px solid #737373;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.2em;
  color: #454647;
  transition: .4s;
}
.btn:hover{
  background-color: #00c8c8;
  border-color: #00c8c8;
  color: #f8f8f8;
  cursor: pointer;
}
.btn:active{
  background-color: #009797;
  border-color: #009797;
}
.bgman{
  position: absolute;
  z-index: 0;
  left: -120px;
  display: block;
  height: 700px;
}
.bgman img{
  object-fit: cover; 
  height: 900px;
}
</style>

<script>
import NavBar from '../Header/Nav-bar.vue';
export default { components: { NavBar } };
</script>