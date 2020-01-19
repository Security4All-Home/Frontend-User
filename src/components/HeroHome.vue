<template>
  <!-- is-fullheight-with-navbar -->
  <section class="hero hasBackgroundImage is-fullheight">
    <div class="hero-head">
      <NavBar></NavBar>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <h1 class="title has-text-white glitch" data-text="Are you secure?">Are you secure?</h1>
          
        </div>
        <div class="column is-2 is-offset-5" style="margin-top:50px"> <button class="button isPrimaryBGColor is-fullwidth" style="color:#0A1F3C"><router-link :to="{name: 'security'}"><b>Find out more</b></router-link></button></div>
      </div>
    </div>
    
  </section>
</template>

<script>
import NavBar from '../components/Navbar'

export default {
  name: "Hero",
  components: {
    NavBar,
  }
};
</script>