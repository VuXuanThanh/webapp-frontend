<template>
  <div clas="customer-view">
    <Header/>
    <Container/>
    <Footer/>
  </div>
</template>

<style scoped>

@import url('../assets/css/base/base.css');
</style>

<script>
import Header from '../components/layout/TheHeader.vue'
import Container from '../components/layout/TheContainer.vue'
import Footer from '../components/layout/TheFooter.vue'

export default {
  name: 'CustomerVIew',
  components: {
    Header,
    Container,
    Footer
  },

  mounted() {
    console.log('App mounted')
  },

  updated() {
    console.log('updated app')
  }
}
</script>
