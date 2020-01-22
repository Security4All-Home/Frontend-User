<template>
<!-- is-fullheight-with-navbar -->
<body>
  <Hero></Hero>
  <Packages></Packages>
  <div class="is-hidden-mobile">
    <Team></Team>
  </div>
</body>
</template>

<script>
import Packages from "../components/Package";
import Hero from "../components/HeroHome";
import Team from "../components/Team";

export default {
  name: "home",
  components: {
    Packages,
    Hero,
    Team
  }
};
</script>

<style scoped>
.hasBackgroundImage {
  background-image: url("../assets/img/HomeWallpaper.jpg") !important;
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
  list-style: none !important;
}

ul li:before {
  content: "\f00c";
  /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  margin-left: -1.3em;
  width: 1.3em;
}
</style>
