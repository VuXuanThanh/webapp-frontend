<template>
  <div class="container">
      <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
  
  
    <router-view/>
  </div>
</template>

<script>
export default {
  mouted(){
    console.log('mouted container');
  },
  updated() {
    console.log('update container', this.$cookies.get("_user") );

    // window.location.reload();
  },
}
</script>

<style>

</style>