<template>
  <div class="content">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'ContentAdmin',

  created() {
    console.log(this.$cookies.get("_userId"))
  }

}
</script>

<style>

</style>