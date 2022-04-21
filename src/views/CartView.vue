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

    <div class="row list-products" v-for="item in CartItems" :key="item.product.productId">
      <div class="col l-5">
        <div class="cart-product-name" :keyId="item.product.productId">
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
            <i class="fa-solid fa-minus cart-button-minus"></i>
          </button>
          <input class="cart-button-item cart-button-input" type="text" value="1" />
          <button class="cart-button-item cart-button-plus" @click="updateQuanlityItem">
            <i class="fa-solid fa-plus cart-button-plus"></i>
          </button>
        </div>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-money">{{formatPrice(item.price)}}</span>
      </div>
      <div class="col l-1">
        <button class="cart-heading cart-deletion" @click="removeItem">Xóa</button>
      </div>
    </div>
    <div class="row row-payment">
      <div class="col l-5">
        <div class="payment-discount">
          <input type="text" class="payment-discount-input" placeholder="Nhập mã giảm giá" />
          <button class="payment-discount-button">Áp dụng</button>
        </div>
      </div>
      <div class="col l-2">
        <button class="payment-remove-all" @click="removeAllItems">Xóa tất cả</button>
      </div>
      <div class="col l-2 col-center">
        <div class="payment-text">Tổng thanh toán:</div>
      </div>
      <div class="col l-2 col-center">
        <div class="payment-sum">{{getTotalMoney}}</div>
      </div>
      <div class="col l-1">
        <button class="payment-button" @click="requestCreateOrder">Mua hàng</button>
      </div>
    </div>
    <Dialog message="Vui lòng chọn sản phẩm đặt hàng" :status="isWaring" />
  </div>
</template>

<script>
  import Dialog from "../components/base/Dialog.vue";
  import axios from "axios";
  import { mapActions, mapGetters, mapMutations } from "vuex";
  export default {
    name: "CartView",
    data() {
      return {
        isWaring: false,
      };
    },
    components: {
      Dialog,
    },
    computed: {
      ...mapGetters(["Product", "CartItems", "CartItem"]),

      getTotalMoney() {
        let value = this.CartItems.reduce((beforeValue, value) => {
          return beforeValue + value.price;
        }, 0);
        return this.formatPrice(value);
      },
    },
    methods: {
      ...mapActions(["handleGetProductById", "handleGetCartByUserId"]),
      ...mapMutations([]),

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
              item.parentElement.parentElement.parentElement.classList.add(
                "list-products-selected"
              );
            });
          } else {
            checkboxs.forEach((item) => {
              item.classList.remove("cart-checkbox-selected");
              item.parentElement.parentElement.parentElement.classList.remove(
                "list-products-selected"
              );
            });
          }
        } else {
          if (!className.includes("cart-checkbox-selected")) {
            checkbox.classList.add("cart-checkbox-selected");
            checkbox.parentElement.parentElement.parentElement.classList.add(
              "list-products-selected"
            );
          } else {
            checkbox.classList.remove("cart-checkbox-selected");
            checkbox.parentElement.parentElement.parentElement.classList.remove(
              "list-products-selected"
            );
          }
        }
      },

      // remove item by productId
      removeItem(e) {
        let parent = e.target.parentElement.parentElement;
        let productId = parent
          .querySelector(".cart-product-name")
          .getAttribute("keyId");
        let userId = this.$cookies.get("_userId");
        console.log(productId, userId);

        axios
          .delete(
            `https://localhost:44321/api/v1/CartItems?userId=${userId}&productId=${productId}`
          )
          .then((res) => {
            console.log(res);
            this.$router.go();
          })
          .catch((err) => {
            console.log(err);
          });
        // let
      },

      // remove all items in cart
      removeAllItems() {
        this.$router.go();
      },

      getNameProductById(productId) {
        this.handleGetProductById(productId);
      },

      formatPrice(price) {
        return price.toLocaleString("vi", { style: "currency", currency: "VND" });
      },

      updateQuanlityItem(e) {
        let btn = e.target;
        let className = btn.className;
        let input =
          btn.tagName === "BUTTON"
            ? btn.parentElement.querySelector(".cart-button-input")
            : btn.parentElement.parentElement.querySelector(".cart-button-input");
        let row = input.parentElement.parentElement.parentElement;
        let quanlity = input.value;
        console.log(quanlity);
        let priceOld = row
          .querySelector(".cart-price-orgin")
          .getAttribute("price");
        if (className.includes("cart-button-plus")) {
          quanlity++;
        } else {
          quanlity -= 1;
          quanlity = quanlity > 1 ? quanlity : 1;
        }
        input.setAttribute("value", quanlity);

        let priceNew = quanlity * priceOld;
        let cartMoney = row.querySelector(".cart-money");
        cartMoney.innerHTML = this.formatPrice(priceNew);
      },

      requestCreateOrder() {
        let me = this;
        let userId = me.$cookies.get("_userId");
        let productItems = [];
        let productsSelected = me.$el.querySelectorAll(
          ".list-products.list-products-selected"
        );
        if (productsSelected.length > 0) {
          productsSelected.forEach((row) => {
            let productId = row
              .querySelector(".cart-product-name")
              .getAttribute("keyid");
            let quanlity = row.querySelector(".cart-button-input").value;
            productItems.push({
              userId: userId,
              productId: productId,
              quanlity: quanlity,
              statusItem: true,
            });
          });

          console.log(productItems);

          axios.put('https://localhost:44321/api/v1/CartItems', productItems, {withCredentials: true})
              .then(res=> {
                console.log(res);
                me.$router.push({path: '/order'});
              })
              .catch(err=> {
                console.log(err)
              })
        } else {
          me.isWaring = true;
          setTimeout(() => {
            me.isWaring = false;
          }, 3000);
        }
        // me.$router.replace({path: '/order'})
      },
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
        me.handleGetCartByUserId({
          userId: me.$cookies.get("_userId"),
          order: false,
        });
      }
    },
  };
</script>

<style scoped>
@import url("../assets/css/page/cart.view.css");
</style>