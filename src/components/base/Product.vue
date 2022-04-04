<template>
  <router-link to="/product/111212" class="home-product-item" href="#">
    <div
      class="home-product-item__img"
      style="background-image: url(https://salt.tikicdn.com/cache/280x280/ts/product/86/dd/0c/116f1383ebab5e5af8e71301a80d1b17.jpg);"
    ></div>
    <h4
      class="home-product-item__name"
    >Điện thoại Apple iPhone 12 bản 64GB - Hàng nhập khẩu new 100% + Dock sạc 20W</h4>
    <div class="home-product-item-price">
      <span class="home-product-item-price-older">30.000.000đ</span>
      <span class="home-product-item-price-current">29.999.000đ</span>
    </div>
    <div class="home-product-item__action">
      <span class="home-product-item__heart home-product-item__heart--liked">
        <i class="home-product-item__heart-icon-empty far fa-heart"></i>
        <i class="home-product-item__heart-icon-fill fas fa-heart"></i>
      </span>
      <div class="home-product-item__rating">
        <i class="home-product-item__rating-star-gold fas fa-star"></i>
        <i class="home-product-item__rating-star-gold fas fa-star"></i>
        <i class="home-product-item__rating-star-gold fas fa-star"></i>
        <i class="home-product-item__rating-star-gold fas fa-star"></i>
        <i class="home-product-item__rating-star-gold fas fa-star"></i>
      </div>
      <span class="home-product-item__sold">88 Đã bán</span>
    </div>
    <div class="home-product-item__orgin">
      <div class="home-product-item-brand">Apple</div>
      <div class="home-product-item__orgin-name">Hoa Kì</div>
    </div>
    <div class="home-product-item__favourite">
      <i class="fas fa-check"></i>
      <span>Yêu thích</span>
    </div>
    <div class="home-product-item__discount">
      <span class="home-product-item__discount-percent">10%</span>
      <span class="home-product-item__discount-lable">GIẢM</span>
    </div>
  </router-link>
</template>

<script>

  export default {
    name: "AProduct",
    props: {
     
    },
    methods: {
      show() {
        console.log(this.$props.product);
      },
    },
  };
</script>

<style scoped>
@import url('../../assets/css/components/product.css');
</style>>
