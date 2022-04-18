<template>
  <div class="grid wide cart-view">
    <div class="row">
      <div class="col l-12">
        <h1 class="cart-title">Giỏ hàng</h1>
      </div>
    </div>

    <div class="row row-product-cart">
      <div class="col l-5">
        <div class="cart-product-name">
          <div class="cart-checkbox cart-checkbox-all" @click="selectCartItem"></div>
          <span class="cart-heading">Sản phẩm</span>
        </div>
      </div>
      <div class="col l-2">
        <span class="cart-heading">Đơn giá</span>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading">Số lượng</span>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-heading-money">Thành tiền</span>
      </div>
      <div class="col l-1">
        <span class="cart-heading">Thao tác</span>
      </div>
    </div>

    <div class="row list-products" v-for="item in CartItems" :key="item.productId">
      <div class="col l-5">
        <div class="cart-product-name">
          <div class="cart-checkbox" @click="selectCartItem"></div>
          <span class="cart-heading">{{item.product.productName}}</span>
        </div>
      </div>
      <div class="col l-2">
        <span class="cart-heading cart-price-orgin" :price="item.price">{{formatPrice(item.price)}}</span>
      </div>
      <div class="col l-2">
        <div class="cart-button">
          <button class="cart-button-item cart-button-minus" @click="updateQuanlityItem">
            <i class="fa-solid fa-minus"></i>
          </button>
          <input class="cart-button-item cart-button-input" type="text" value="1" />
          <button class="cart-button-item cart-button-plus" @click="updateQuanlityItem">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-money">{{formatPrice(item.price)}}</span>
      </div>
      <div class="col l-1">
        <button class="cart-heading cart-deletion">Xóa</button>
      </div>
    </div>
    <div class="row row-payment">
      <div class="col l-5">
          <div class="payment-discount">
              <input type="text" class="payment-discount-input" placeholder="Nhập mã giảm giá">
              <button class="payment-discount-button">Áp dụng</button>
          </div>
      </div>
      <div class="col l-2">
          <button class="payment-remove-all">Xóa tất cả</button>
      </div>
      <div class="col l-2 col-center">
        <div class="payment-text">Tổng thanh toán:</div>
      </div>
      <div class="col l-2 col-center">
          <div class="payment-sum">5.000.000 đ</div>
      </div>
      <div class="col l-1">
          <button class="payment-button">
              Mua hàng
          </button>
        </div>
    </div>
   <!-- {{CartItems}} -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: "CartView",
    data() {
      return {};
    },
    computed: {
      ...mapGetters([
        "Product",
        "CartItems",
        "CartItem"
      ]),
    },
    methods: {
      ...mapActions([
        "handleGetProductById",
        'handleGetCartByUserId'
      ]),
      ...mapMutations([

      ]),

      // select items in cart
      selectCartItem(e) {
        let me = this;
        let checkbox = e.target;
        let className = checkbox.className;
        if (className.includes("cart-checkbox-all")) {
          let checkboxs = me.$el.querySelectorAll(".cart-checkbox");
          if (!className.includes("cart-checkbox-selected")) {
            checkboxs.forEach((item) => {
              item.classList.add("cart-checkbox-selected");
            });
          } else {
            checkboxs.forEach((item) => {
              item.classList.remove("cart-checkbox-selected");
            });
          }
        } else {
          if (!className.includes("cart-checkbox-selected")) {
            checkbox.classList.add("cart-checkbox-selected");
          } else {
            checkbox.classList.remove("cart-checkbox-selected");
          }
        }
      },

      getNameProductById(productId){
         this.handleGetProductById(productId);
      },

      formatPrice(price) {
        return price.toLocaleString("vi", { style: "currency", currency: "VND" });
      },

      updateQuanlityItem(e) {
        let btn = e.target;
        let className = btn.className;
        let input = btn.parentElement.querySelector('.cart-button-input');
        let priceOld = this.$el.querySelector('.cart-price-orgin').getAttribute('price')
        if(className.includes('cart-button-plus')) {
          console.log('+', priceOld);
          console.log(input)
        }
        else { 
          console.log('-')
        }
      }
    },

    created() {
      let me = this;
      console.log(me.$cookies);
      if (!me.$cookies.get("_userId")) {
        me.$router.go(-1);
      }
      window.scrollTo(0, 0);
    },
    mounted() {
      let me = this;
      console.log("mouted cart view");
       if (me.$cookies.get("_userId")) {
         me.handleGetCartByUserId(me.$cookies.get("_userId"));
      }
    },
  };
</script>

<style scoped>
@import url("../assets/css/page/cart.view.css");
</style>