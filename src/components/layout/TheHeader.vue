<template>
  <div class="header-container">
    <div class="grid wide">
      <header class="row header">
        <!-- {{$cookies.get("_usesr")  }} -->
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
            <router-link to="/registration" class="header__right-links" v-if="!IsLoggedIn">Đăng kí</router-link>
            <router-link to="/login" class="header__right-links" v-if="!IsLoggedIn">Đăng nhập</router-link>
            <!-- <a href="#" class="header__right-links" ></a> -->

            <div href="#" class="header__right-links header__right-links-account" v-if="IsLoggedIn">
              <div class="header-account">
                <i class="fa-solid fa-user"></i>
                <span>{{UserName}}</span>

                <div class="header-account-options">
                  <ul class="options">
                    <li class="options-item" @click="confirmLogout">Đăng xuất</li>
                  </ul>
                </div>
              </div>
            </div>

            <router-link to="/cart" class="header__right-links header__right-cart">
              <i class="fa-solid fa-cart-shopping header__cart-icon"></i>
              <span class="header__cart-quanlity">0</span>
            </router-link>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters, mapMutations } from "vuex";

  export default {
    created() {
      console.log("create the header");
    },
    mounted() {
      let me = this;
      console.log(`mounted of header ${me.$cookies.get("_user")}`);
      me.name = me.$cookies.get("_user");
      if (me.$cookies.get("_userId")) {
        console.log("Da dang nhap ");
        me.handleStatusLogin(true);
      } else {
        console.log("chua dang nhap");
      }
    },
    updated() {
      let me = this;
      console.log(`updated of header ${this.$cookies.get("_user")}`);
      this.name = this.UserName;
      console.log(this.name);
      console.log(`is login ${me.IsLoggedIn}`);
      if (!me.IsLoggedIn) {
        this.$cookies.remove("_user");
        this.$cookies.remove("_userId");
      }
      // this.$forceUpdate()
    },
    data() {
      return {
        name: "",
        isLogon: true,
      };
    },
    computed: {
      ...mapGetters(["UserId", "UserName", "Age", "IsLoggedIn"]),
      getName() {
        return this.$cookies.get("_user");
      },
    },
    methods: {
      ...mapActions(["handleStatusLogin", "handleLogout"]),
      ...mapMutations(["statusLogin"]),
      getUserName() {
        return this.$cookies.get("_user");
      },
      confirmLogout() {
        this.handleLogout();
        console.log("sau khi dang xuat", this.UserId);
        // this.$cookies.remove("_user");
        // this.$cookies.remove("_userId");
      },
    },
  };
</script>

<style>
@import url("../../assets/css/base/header.css");

.header__logo-link {
  margin: 0 auto;
}
</style>