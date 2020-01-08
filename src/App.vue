<template>
  <div id="app">
    <NavBar></NavBar>

    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
// Components
//import NavBar from './components/NavBar'
import Footer from './components/Footer'



export default {
  components: {
    //NavBar,
    Footer
  }
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
