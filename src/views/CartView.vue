<template>
  <div class="grid wide cart-view">
    <div class="row">
      <div class="col l-12">
        <h1 class="cart-title">Giỏ hàng</h1>
      </div>
    </div>

    <div class="row row-product-cart">
      <!-- <div class="col l-1">
          <div class="cart-checkbox "></div> 
        
      </div>-->
      <div class="col l-5">
        <div class="cart-product-name">
          <div class="cart-checkbox"></div>
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

    <div class="row list-products">
      <!-- <div class="col l-1">
          <div class="cart-checkbox "></div>
      </div>-->
      <div class="col l-5">
        <div class="cart-product-name">
          <div class="cart-checkbox cart-checkbox-selected"></div>
          <span class="cart-heading">Máy tính bảng Samsung Galaxy Tab A 8 Inch (2019) T295 32GB</span>
        </div>
      </div>
      <div class="col l-2">
        <span class="cart-heading">2.790.000₫</span>
      </div>
      <div class="col l-2">
        <div class="cart-button">
          <button class="cart-button-item">
            <i class="fa-solid fa-minus"></i>
          </button>
          <input class="cart-button-item cart-button-input" type="text" value="1" />
          <button class="cart-button-item">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-money">2.790.000 ₫</span>
      </div>
      <div class="col l-1">
        <button class="cart-heading cart-deletion">Xóa</button>
      </div>
    </div>

    <div class="row list-products">
      <!-- <div class="col l-1">
          <div class="cart-checkbox "></div>
      </div>-->
      <div class="col l-5">
        <div class="cart-product-name">
          <div class="cart-checkbox cart-checkbox-selected"></div>
          <span class="cart-heading">Máy tính bảng Samsung Galaxy Tab A 8 Inch (2019) T295 32GB</span>
        </div>
      </div>
      <div class="col l-2">
        <span class="cart-heading">2.790.000₫</span>
      </div>
      <div class="col l-2">
        <div class="cart-button">
          <button class="cart-button-item">
            <i class="fa-solid fa-minus"></i>
          </button>
          <input class="cart-button-item cart-button-input" type="text" value="1" />
          <button class="cart-button-item">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-money">2.790.000 ₫</span>
      </div>
      <div class="col l-1">
        <button class="cart-heading cart-deletion">Xóa</button>
      </div>
    </div>

    <div class="row list-products">
      <!-- <div class="col l-1">
          <div class="cart-checkbox "></div>
      </div>-->
      <div class="col l-5">
        <div class="cart-product-name">
          <div class="cart-checkbox cart-checkbox-selected"></div>
          <span class="cart-heading">Máy tính bảng Samsung Galaxy Tab A 8 Inch (2019) T295 32GB</span>
        </div>
      </div>
      <div class="col l-2">
        <span class="cart-heading">2.790.000₫</span>
      </div>
      <div class="col l-2">
        <div class="cart-button">
          <button class="cart-button-item">
            <i class="fa-solid fa-minus"></i>
          </button>
          <input class="cart-button-item cart-button-input" type="text" value="1" />
          <button class="cart-button-item">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="col l-2 col-center">
        <span class="cart-heading cart-money">2.790.000 ₫</span>
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
  </div>
</template>

<script>
  export default {
    methods: {},
  };
</script>

<style scoped>
@import url("../assets/css/page/cart.view.css");
</style>