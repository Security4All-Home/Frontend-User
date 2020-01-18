<template>
  <div id="app">
    <NavBar v-if="currentRoute!='home'"></NavBar>

    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
// Components
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      currentRoute: ""
    };
  },
  mounted() {
    this.currentRoute = this.$router.currentRoute.name;
  }
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
