<template>
  <div id="app">

    <NavBar></NavBar>

    <div  class="">
        <router-view />
    </div>

    <Footer></Footer>
    
  </div>
</template>

<script>
// Components
import Navbar from './views/Navbar'
import Footer from './views/Footer'


export default {
  components: {
            Navbar,
            Footer
  },
}
</script>

<style lang="scss">
    @import "./assets/main";
</style>
