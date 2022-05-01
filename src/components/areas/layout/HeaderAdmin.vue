<template>
  <header class="header">
    <div class="header__left">
      <div class="combobox combobox__restaurant">
        <input class="combobox__input" value="Lyoko shop" />
        <i class="fas fa-chevron-down combobox__icon" @click="showLogout"></i>
        <ul class="combobox__content" >
          <li class="combobox__content-item combobox__content-item-selected" @click="confirmLogout">
             Đăng xuất
          </li>
        </ul>
      </div>
    </div>
    <div class="header__right">
      <div class="header__right-avartar"></div>
      <span class="header__right-user">Administrator</span>
      <i class="fas fa-ellipsis-h header__right-icon"></i>
    </div>
  </header>
</template>

<script>
   import { mapActions, mapGetters } from "vuex";
  export default {
    name: 'HeaderAdmin',
    data() {
      return {
        isShowLogout: false,
      }
    },
      computed: {
      ...mapGetters([
        "Categories",
        "Products",
        "CategoryId",
        "ProductImages",
        "IsShowForm",
        "Brands",
      ]),
    },
     
    methods: {
       ...mapActions([
        "handleLogout",
      ]),
      showLogout(e) {
        e.target.parentElement.querySelector('.combobox__content').classList.toggle('combobox__content-display');

        // this.isShowLogout = !this.isShowLogout;
      },
      confirmLogout() {
        
        this.handleLogout();
        this.$cookies.remove('_userId');
        this.$cookies.remove('_user');
        this.$cookies.remove('_role');
        this.$cookies.remove('_tokenExpries');

        this.$router.push({path: "/administrator/login"})
      }
    },
  };
</script>

<style>
</style>