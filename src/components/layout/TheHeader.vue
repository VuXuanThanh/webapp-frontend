<template>
  <div class="header-container">
    <div class="grid wide">
      <header class="row header">
        <div class="col l-6">
          <div class="header__left">
            <div class="header__logo">
              <router-link to="/" class="header__logo-link">
                <div class="header__logo-icon"></div>
              </router-link>
            </div>

            <div class="header__search">
              <div class="header__search-box">
                <i class="fa-solid fa-magnifying-glass header__search-icon"></i>
                <input type="text" class="header__search-input" placeholder="Tìm kiếm" />
              </div>

              <div class="header__search-button">
                <button class="header__button">
                  <i class="fa-solid fa-magnifying-glass header__search-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col l-6">
          <div class="header__right">
            <a href="#" class="header__right-links">Giới thiệu</a>
            <router-link to="/products" class="header__right-links">Sản phẩm</router-link>
            <!-- <a href="#" class="header__right-links">Sản phẩm</a> -->
            <router-link to="/registration" class="header__right-links" v-if="true">Đăng kí</router-link>
            <router-link to="/login" class="header__right-links" v-if="true">Đăng nhập</router-link>
            <!-- <a href="#" class="header__right-links" ></a> -->

            <a href="#" class="header__right-links header__right-links-account" v-if="false">
              <div class="header-account">
                <i class="fa-solid fa-user"></i>
                <span>Vũ Xuân Thành</span>

                <div class="header-account-options">
                  <ul class="options">
                    <li class="options-item">Đăng xuất</li>
                  </ul>
                </div>

              </div>
            </a>

            <a href="#" class="header__right-links header__right-cart">
              <i class="fa-solid fa-cart-shopping header__cart-icon"></i>
              <span class="header__cart-quanlity">0</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
@import url("../../assets/css/base/header.css");

.header__logo-link {
  margin: 0 auto;
}
</style>