<template>

<div class="row no-gutters row__header">
  <div class="grid wide">
    <header class="row header">
        <div class="col l-6">

          <div class="header__left">
            <div class="header__logo"><div class="header__logo-icon"></div>
            </div>
          

            <div class="header__search">

              <div class="header__search-box">
                <i class="fa-solid fa-magnifying-glass header__search-icon"></i>
                <input type="text" class="header__search-input" placeholder="Tìm kiếm">
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
            <a href="#" class="header__right-links">Sản phẩm</a>
            <a href="#" class="header__right-links">Đăng kí</a>
            <a href="#" class="header__right-links">Đăng nhập</a>
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

export default {

}
</script>

<style>
@import url('../../assets/css/base/header.css');
</style>