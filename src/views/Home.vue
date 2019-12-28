<template>
<!-- is-fullheight-with-navbar -->
  <section class="hero hasBackgroundImage is-fullheight">
    <div class="hero-head">
        <NavBar></NavBar>
    </div>
    <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 class="title has-text-white glitch" data-text="Are you secure?">
                            Are you secure?
                        </h1>
                        
                    </div>
                </div>
            </div>

    </section>

</template>

<script>
import NavBar from '../components/NavbarC'

export default {
  name: "home",
  components: {
            NavBar,
  },
};
</script>

<style>

.hasBackgroundImage {
    background-image: url("../assets/Images/HomeWallpaper.jpg") !important
}

</style>
