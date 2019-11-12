<template>
  <div id="app">

    <NavBar></NavBar>

    
    <router-view />
    

    <Footer></Footer>
    
  </div>
</template>

<script>
// Components
import NavBar from './views/NavBar'
import Footer from './views/Footer'


export default {
  components: {
            NavBar,
            Footer
  },
}
</script>

<style lang="scss">
    @import "./assets/main";
</style>
