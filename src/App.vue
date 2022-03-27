<template>
  <div id="app" class="grid">
    <Header/>
    <Container/>
    <Footer/>
  </div>
</template>

<style >

@import url('./assets/css/base/base.css');
</style>

<script>
import Header from './components/layout/TheHeader.vue'
import Container from './components/layout/TheContainer.vue'
import Footer from './components/layout/TheFooter.vue'

export default {
  name: 'App',
  components: {
    Header,
    Container,
    Footer
  }
}
</script>
