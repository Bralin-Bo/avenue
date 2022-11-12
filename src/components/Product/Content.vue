<template>
   <div class="product-content container">
      <div class="product">
         <div class="product__img"><img
               src="https://pyxis.nymag.com/v1/imgs/05d/b15/f4c61238a24a34610ae3a41dede1df90a4-Gildan-black-tshirt.rsquare.w600.jpg"
               alt=""></div>
         <div class="product__info">
            <h2 class="product__title">Ave classic sweatshirt</h2>
            <p class="product__price"><span>£107</span> £89.99</p>
            <div class="product__subtitle">
               <p>Availability: <span>In stock</span></p>
               <p>Product Code: <span>#499577</span></p>
               <p>Tags: <span class="blue">Classic, Casual, V-neck, Loose</span></p>
            </div>
            <p class="product__body">Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est
               congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a
               pretium justo interdum. <br /> <br />
               • Elasticated cuffs<br />
               • Casual fit<br />
               • 100% Cotton<br />
               • Free shipping with 4 days delivery<br />
            </p>
            <div class="product__settings">
               <div class="product-select">
                  <h4 class="product-select__title">Colour</h4>
                  <select name="" id="">Select Colour</select>
               </div>
               <div class="product-select">
                  <h4 class="product-select__title">Size</h4>
                  <select name="" id="">Select Colour</select>
               </div>
               <div class="product-select">
                  <h4 class="product-select__title">QTY</h4>
                  <select name="" id="">Select Colour</select>
               </div>
            </div>
            <button class="btn btn-product">Add to Cart</button>
         </div>
      </div>
      <div class="product-description">
         <h4 class="product-description__title">Nunc egestas posuere enim, eu maximus erat posuere eget</h4>
         <p class="product__body">Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus. <br/><br/>Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.</p>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">
.product-content
   margin: 65px auto 100px auto
.product
   display: flex
   justify-content: space-between
   &__img
      width: 100%
      height: 700px
      position: relative
      img
         position: absolute
         top: 0
         left: 0
         width: 100%
         height: 100%
         object-fit: cover
   &__info
      margin-left: 30px
   &__title
      font-size: 18px
      line-height: 20px
      letter-spacing: 2px
      font-weight: 700
      text-transform: uppercase
      color: #575153
   &__price
      margin-top: 30px
      font-size: 30px
      line-height: 1.2
      font-weight: 300
      text-transform: uppercase
      letter-spacing: 0.05em
      color: #9a9a9a
      span
         text-decoration: line-through
   &__subtitle
      margin-top: 30px
      margin-bottom: 30px
      font-size: 13px
      line-height: 30px
      font-weight: 700
      text-transform: uppercase
      color: #575153
      span
         font-family: Roboto
         font-size: 15px
         text-transform: none
         font-weight: 400
         color: #8c8c8c
      .blue
         color: #00c8c8
   &__body
      font-family: Roboto
      font-size: 15px
      line-height: 22px
      font-weight: 400
      color: #8e8c8c
   &__settings
      margin-top: 35px
      margin-bottom: 50px
      display: flex
      justify-content: space-between



.product-select
   &__title
      font-size: 13px
      line-height: 30px
      font-weight: 700
      text-transform: uppercase
      color: #575153
   select
      width: 170px
      height: 35px
      background-color: rgba(45,113,240,0.0)
      border: 1px solid #e7e7e7
.btn-product
   background-color: #00c8c8
   border-color: #00c8c8
   color: #f8f8f8
   &:hover
      border-color: #333333
      background-color: #333333

.product-description
   margin-top: 40px
   &__title
      margin-bottom: 15px
      font-size: 13px
      line-height: 20px
      font-weight: 700
      text-transform: uppercase
      color: #727272
</style>