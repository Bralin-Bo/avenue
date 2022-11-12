<template>
  <div class="nav">
      <router-link to="/" class="nav__title"><strong>Avenue</strong> Fashion</router-link>
      <div class="nav__links">
         <div class="nav__link-box">
         <a href="#" class="nav__link">
            Mens
            <font-awesome-icon class="angle" icon="fa-solid fa-angle-down" transform="left-50 down-15 grow-2"/>
         </a>
         <div class="nav__content link-content">
            <div class="link-content__links">
               <div class="link-content__casual">
               <h4 class="link-content__title">Casual</h4>
               <a href="#" class="link-content__link">Jackets</a>
               <a href="#" class="link-content__link">Hoodies & Sweatshirts</a>
               <a href="#" class="link-content__link">Polo Shirt</a>
               <a href="#" class="link-content__link">Sportswear</a>
               <a href="#" class="link-content__link">Trousers & Chinos</a>
               <a href="#" class="link-content__link">T-Shirts</a>
               </div>
               <div class="link-content__formal">
               <h4 class="link-content__title">Formal</h4>
               <a href="#" class="link-content__link">Jackets</a>
               <a href="#" class="link-content__link">Shirts</a>
               <a href="#" class="link-content__link">Suits</a>
               <a href="#" class="link-content__link">Trousers</a>
               </div>
            </div>
            <div class="link-content__autumn">
               <p class="link-content__sale">Autumn sale! up to 50% off</p>
            </div>
         </div>
         </div>
         <div class="nav__link-box">
         <a href="#" class="nav__link">Womens <font-awesome-icon class="angle" icon="fa-solid fa-angle-down" transform="left-80 down-15 grow-2"/></a>
         <div class="nav__content link-content">
               <div class="link-content__links">
               <div class="link-content__casual">
                  <h4 class="link-content__title">Casual</h4>
                  <a href="#" class="link-content__link">Jackets</a>
                  <a href="#" class="link-content__link">Hoodies & Sweatshirts</a>
                  <a href="#" class="link-content__link">Polo Shirt</a>
                  <a href="#" class="link-content__link">Sportswear</a>
                  <a href="#" class="link-content__link">Trousers & Chinos</a>
                  <a href="#" class="link-content__link">T-Shirts</a>
               </div>
               <div class="link-content__formal">
                  <h4 class="link-content__title">Formal</h4>
                  <a href="#" class="link-content__link">Jackets</a>
                  <a href="#" class="link-content__link">Shirts</a>
                  <a href="#" class="link-content__link">Suits</a>
                  <a href="#" class="link-content__link">Trousers</a>
               </div>
               </div>
               <div class="link-content__autumn">
               <p class="link-content__sale">Autumn sale! up to 50% off</p>
               </div>
            </div>
         </div>
         <router-link to="/brand" class="nav__link">The brand</router-link>
         <router-link to="/localstores" class="nav__link">Local stores</router-link>
         <span class="search-box">
         <input type="text" placeholder="Search..." class="nav__search"/>
         <font-awesome-icon icon="fa-solid fa-magnifying-glass" transform="left-20"/>
         </span>
      </div>
   </div>
</template>
<style>
.nav {
  z-index: 2;
  margin-top: 30px!important;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
}
.nav__title {
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;
  text-decoration: none;
  color: #000;
}
.nav__links{
  display: flex;
  align-items: start;
}
.nav__link-box{
  position: relative;
}
.nav__link {
  text-decoration: none;
  color: #000;
  text-transform: uppercase;
  margin-right: 30px;
  font-size: 13px;
  transition: .4s;
  display: block;
}
.nav__link-box:hover .nav__link{
  color: #21cece;
  cursor: pointer;
}
.nav__link:hover{
  color: #21cece;
}
.angle{
  transition: 0.4s;
}
.nav__link-box:hover .angle{
  transform: rotate(180deg);
}
.nav__content{
  z-index: 3;
  position: absolute;
  top: 40px;  
  width: 300px;
  height: 400px;
  background-color: #f8f8f8;
  box-shadow: 0px 17px 24px 0px rgba(0,0,0,0.14);
  visibility: hidden;
  transition: .1s;
}
.nav__link-box:hover .nav__content{
  visibility: visible;
}
.nav__search{
  padding: 5px;
  font-size: 13px;
}

.link-content{
  padding: 30px;
}
.link-content__links{
  display: flex;
}
.link-content__casual{
  display: inline-flex;
  flex-direction: column;
  margin-right: 50px;
}
.link-content__formal{
  display: flex;
  flex-direction: column;
}
.link-content__title{
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
  color: #575153;
  margin-bottom: 10px;
}
.link-content__link{
  font-size: 15px;
  line-height: 30px;
  font-weight: 300;
  color: #727272;
  text-decoration: none;
}
.link-content__link:hover{
  color: #000;
}

.link-content__autumn{
  width: 100%;
  height: 150px;
  background-color: #333333;
  text-align: center;
  margin-top: 30px;
}
.link-content__sale{
  color: #fff;
  font-size: 30px;
  padding-top: 25px;
  line-height: 48px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>