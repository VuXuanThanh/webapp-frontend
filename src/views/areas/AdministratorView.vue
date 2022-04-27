<template>
  <div class="app">
      <MenuAdmin/>
      <MainAdmin/>
  </div>
</template>

<script>

import MenuAdmin from '../../components/areas/layout/MenuAdmin.vue'
import MainAdmin from '../../components/areas/layout/MainAdmin.vue'
export default {
    name: 'AdminView',

    components: {
        MenuAdmin,
        MainAdmin
    },

    created() {
      window.scrollTo(0, 0);
      let me = this;
      
      if (!me.$cookies.get("_userId")) {
        me.$router.push({path: '/admin/login'});
      }
    },
}
</script>

<style scoped>
@import url('../../assets/areas/css/main.css');
@import url('../../assets/css/base/grid.css')
/* @import url('../../assets/css/base/base.css'); */
</style>