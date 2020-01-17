<template>
<!-- is-fullheight-with-navbar -->
<body>
  <Hero></Hero>
  <Packages></Packages>
</body>
</template>

<script>
import Packages from "../components/Package";
import Hero from "../components/HeroHome";

export default {
  name: "home",
  components: {
    Packages,
    Hero
  }
};
</script>

<style scoped>
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
