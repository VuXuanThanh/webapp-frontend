<template>
  <div class="main">
      <HeaderAdmin/>
      <ContentAdmin/>
   
  </div>
</template>

<script>
import HeaderAdmin from './HeaderAdmin.vue'
import ContentAdmin from './ContentAdmin.vue'
export default {
    name: 'MainAdmin',
    components: {
        HeaderAdmin,
        ContentAdmin
    }
}
</script>

<style>

</style>