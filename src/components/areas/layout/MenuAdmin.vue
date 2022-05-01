<template>
  <div class="menu">
    <div class="menu__icon">
      <div class="menu__icon-bar"></div>
      <div class="menu__icon-logo"></div>
    </div>
    <div class="menu__sidebar">
      <a
        class="menu__sidebar-link menu__sidebar-dashboard sidebar-link-selected"
        href="/admin"
        @click="clickMenuItem"
      >
        <span class="sidebar-item-selected">Tổng quan</span>
      </a>
      <a
        @click="clickMenuItem"
        class="menu__sidebar-link menu__sidebar-dashboard"
        href="/admin/product"
      >
        <span>Quản lí sản phẩm</span>
      </a>
      <a @click="clickMenuItem" class="menu__sidebar-link menu__sidebar-settting" href="/admin/category">
        <span>Quản lí danh mục</span>
      </a>

      <a
        @click="clickMenuItem"
        class="menu__sidebar-link menu__sidebar-settting"
        href="/admin/brand"
      >
        <span>Quản lí nhà cung cấp</span>
      </a>
      <a @click="clickMenuItem" class="menu__sidebar-link menu__sidebar-settting" href="/admin/users">
        <span>Quản lí người dùng</span>
      </a>
      <a @click="clickMenuItem" class="menu__sidebar-link menu__sidebar-report" href="#">
        <span>Cài đặt hệ thống</span>
      </a>
      <a @click="clickMenuItem" class="menu__sidebar-link menu__sidebar-report" href="#">
        <span>Khác</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MenuAdmin",

    methods: {
      clickMenuItem(e) {
        let me = this;
        e.preventDefault();
        let tagName = e.target.tagName;
        let href = "";
        if (tagName == "SPAN") {
          let parent = e.target.parentElement;
          href = parent.getAttribute("href");

          let itemSelected = me.$el.querySelector(".sidebar-item-selected");
          let parentSelected = me.$el.querySelector(".sidebar-link-selected");
          if (itemSelected) {
            itemSelected.classList.remove("sidebar-item-selected");
            parentSelected.classList.remove("sidebar-link-selected");

            e.target.classList.add("sidebar-item-selected");
            parent.classList.add("sidebar-link-selected");
          }
        } else {
          href = e.target.getAttribute("href");
        }
        me.$router.push({ path: href });
      },
    },
  };
</script>

<style>
</style>