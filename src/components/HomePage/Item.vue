<template>
  <div class="item">
      <p class="item__price">{{price}}</p>
      <img :src=imgsrc alt="" class="item__cover">
  </div>
  <div class="item__description">
    <p class="item__name">{{name}}</p>
    <p class="item__body">{{body}}</p>
  </div>
</template>

<script>
export default {
  props:{
    price:{},
    imgsrc:{ default:'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/448087/item/goods_25_448087.jpg?width=450&impolicy=quality_70'},
    name:{},
    body:{}
  }
}
</script>

<style lang="sass">
.item
  &:hover
    cursor: pointer
  &__price
    z-index: 1
    position: absolute

    font-size: 21px
    line-height: 1.2
    font-weight: 300
    letter-spacing: 0.05em
    color: #9a9a9a
    padding: 5px
  &__cover
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    object-fit: cover
  &__description
    visibility: hidden
    position: absolute
    z-index: 2
    cursor: pointer
    bottom: -100px
    background-color: #f8f8f8
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.14)
    width: 100%
    height: 100px
    text-align: center
    transition: .2s
  &__name
    margin-top: 10px
    font-size: 13px
    line-height: 20px
    font-weight: 400
    text-transform: uppercase
    color: #727272
  &__body
    font-size: 15px
    line-height: 22px
    font-weight: 400
    color: #8e8c8c
</style>