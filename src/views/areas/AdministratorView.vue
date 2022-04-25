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
    }
}
</script>

<style scoped>
@import url('../../assets/areas/css/main.css');
</style>