<template>
  <div class="app">
    <MenuAdmin />
    <MainAdmin />
  </div>
</template>

<script>
  import axios from "axios";
  import MenuAdmin from "../../components/areas/layout/MenuAdmin.vue";
  import MainAdmin from "../../components/areas/layout/MainAdmin.vue";
  export default {
    name: "AdminView",

    components: {
      MenuAdmin,
      MainAdmin,
    },
    data() {
      return {
        isSuccess: true,
      };
    },

    methods: {
      async checkPolicy() {},

      exit() {
        console.log(this.isSuccess);
      },
    },

    async created() {
      window.scrollTo(0, 0);
      let me = this;
      await axios
        .get("https://localhost:44321/api/v1/Users/userId/roles/1", {
          withCredentials: true,
        })
        .then((res) => {
          console.log("sucesss", res);
          me.isSuccess = true;
        })
        .catch((err) => {
          console.log(err);
          me.isSuccess = false;
        });
      if (!me.isSuccess) {
        me.$router.push({ path: "/administrator/login" });
      }
    },
    mounted() {
      // let me = this;
      // await me.checkPolicy();
      //  me.exit();
    },
  };
</script>

<style scoped>
/* @import url('../../assets/css/base/base.css'); */
</style>