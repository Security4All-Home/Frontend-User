<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <NavBar></NavBar> -->
=======
    <NavBar v-if="currentRoute!='home'"></NavBar>
>>>>>>> 8e1f7a2b282ac329875dd6ba0bb434a002c64213

    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
// Components
<<<<<<< HEAD
//import NavBar from './components/NavBar'
import Footer from "./components/Footer";
=======
import NavBar from './components/Navbar'
import Footer from './components/Footer'


>>>>>>> 8e1f7a2b282ac329875dd6ba0bb434a002c64213

export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      currentRoute: ""
    }
  },
  mounted() {
    this.currentRoute = this.$router.currentRoute.name
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
