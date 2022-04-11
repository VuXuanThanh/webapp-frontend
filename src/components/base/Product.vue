<template>
  <div class="col l-3">
    <router-link :to="'/product/'+product.productId" class="home-product-item" href="#">
      <!-- <div
      class="home-product-item__img"
      v-bind:style="{'background-image': `url(${require(`@/assets/img/iphone.jpg`)})`}"
      ></div>-->

      <div
        class="home-product-item__img"
        :style="{backgroundImage: `url(${getImageAvartar})`}"
      ></div>
      <h4
        class="home-product-item__name"
      >{{product.productName}}</h4>
      <div class="home-product-item-price">
        <span class="home-product-item-price-older">{{formatPrice('orgin')}}</span>
        <span class="home-product-item-price-current">{{formatPrice('deal')}}</span>
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
        <div class="home-product-item-brand"></div>
        <div class="home-product-item__orgin-name">{{product.orgin}}</div>
      </div>
      <div class="home-product-item__favourite">
        <i class="fas fa-check"></i>
        <span>Yêu thích</span>
      </div>
      <div class="home-product-item__discount">
        <span class="home-product-item__discount-percent">{{calculatePercentDeal}}%</span>
        <span class="home-product-item__discount-lable">GIẢM</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// import axios from 'axios';
 import {mapActions, mapGetters, mapMutations} from 'vuex'
// import axios from "axios";
  export default {
    name: "AProduct",
    props: {
      product: Object
    },
    data() {
      return {
        productImg: [],
      }
    },
     computed: {
      ...mapGetters([
        'UserName',
        'Age',
        'Posts',
        'Categories',
        'Products',
        'CategoryId',
        'ProductImages'
      ]),

      calculatePercentDeal(){
        return Math.round((1-this.product.priceDeal/this.product.priceOrgin)*100);
      },

      getImageAvartar() {
        let me = this;
        let image= me.ProductImages.filter(image=> image.productId == me.product.productId);
        let result = Object.assign({},  image[0])
 
        return result.imageUrl;
      }

     
     
    },
    methods:{
      ...mapActions([
        'handleChangeUserName',
        'handleChangeAge',
        'handleGetPosts',
        'handleGetCategories',
        'handleGetProductsByCategory',
        'handleGetImageByProduct'
      ]),
      ...mapMutations([
        'changUserName',
        'changeAge',
        'getCategories',
        'getProductsByCategory',
        'getImageByProduct'
      ]),

      getProductsByCategory() {
      //   var firstCategory = this.$el.querySelector('.category__list-item');
      // console.log(firstCategory)
      // console.log(firstCategory.getAttribute('keyId'))
      // let keyId = firstCategory.getAttribute('keyId');
      this.handleGetProductsByCategory();
      },

      formatPrice(price) {
        let value = (price==='orgin') ? this.product.priceOrgin : this.product.priceDeal;
        return value.toLocaleString('vi', {style : 'currency', currency : 'VND'});
      }
     
    },
    created() {
      
      // axios.get(`https://localhost:44321/api/v1/ProductImages/productId/${this.product.productId}`)
      //       .then(res=> {
      //           console.log('image product', res.data);
      //           this.productImg = res.data;
      //         console.log('gia tri cua mang image', this.productImg);

      //       })
      //       .catch(err=> {
      //           console.clear(err);
                
      //       })
      
       
    },
    mounted() {
    
      // let {productImageId, imageUrl, productId} =this.ProductImages[0];
      // console.log('bo ba: ', productImageId, imageUrl, productId);
     
        // console.log('gia tri cua mang image', this.productImg);
      //   let me = this;
      // let productId = me.product.productId;
      // this.handleGetImageByProduct('3ead1b72-31d1-524a-8b6a-e0860b0602ba');
      // console.log('ma san pham', );
      // this.handleGetImageByProduct(productId);

    },
    updated(){
        // console.log('gia tri cua mang image', this.productImg);
    }
  };
</script>

<style scoped>
@import url("../../assets/css/components/product.css");
</style>>
