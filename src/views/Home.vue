<template>
  <!-- is-fullheight-with-navbar -->
  <body>
  <Hero></Hero>
  <Packages></Packages>
  <Team></Team>


  </body>
  
</template>

<script>
import Packages from '../components/Package'
import Hero from '../components/HeroHome'
import Team from '../components/Team'

export default {
  name: "home",
  components: {
    Packages,
    Hero,
    Team
  }
};
</script>

<style>
.hasBackgroundImage {
  background-image: url("../assets/Images/HomeWallpaper.jpg") !important;
}

#secPack {
  background-color: #373737;
}

#articleTitle {
  border-bottom: 1px solid #eee;
  padding: 0;
}

#btnTeste {
  position: relative;
  top: 50px;
}

ul {
  list-style: none;
}

li:before {
  content: "\f00c"; /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em; /* same as padding-left set on li */
  width: 1.3em; /* same as padding-left set on li */
}
</style>
