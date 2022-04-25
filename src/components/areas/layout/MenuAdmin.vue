<template>
  <div class="menu">
    <div class="menu__icon">
      <div class="menu__icon-bar"></div>
      <div class="menu__icon-logo"></div>
    </div>
    <div class="menu__sidebar">
      <a class="menu__sidebar-link menu__sidebar-dashboard" href="#">
        <span >Tổng quan</span>
      </a>
      <a class="menu__sidebar-link menu__sidebar-dashboard sidebar-link-selected" href="#">
        <span class="sidebar-item-selected">Quản lí sản phẩm</span>
      </a>
      <a class="menu__sidebar-link menu__sideba" href="#">
        <span >Quản lí danh mục</span>
      </a>
      <a class="menu__sidebar-link menu__sideba" href="#">
        <span>Quản lí hóa đơn</span>
      </a>
      <a class="menu__sidebar-link menu__sidebar-settting" href="#">
        <span>Quản lí nhà cung cấp</span>
      </a>
      <a class="menu__sidebar-link menu__sidebar-settting" href="#">
        <span>Quản lí khách hàng</span>
      </a>
       <a class="menu__sidebar-link menu__sidebar-report" href="#">
        <span>Báo cáo</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MenuAdmin'
  };
</script>

<style>
</style>