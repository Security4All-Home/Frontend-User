<template>
<body>
  <HomeManager />
</body>
</template>

<script>
// @ is an alias to /src
import HomeManager from "../components/HomeManager.vue";
//import Navbar from "@/views/NavBar.vue";

export default {
  name: "homeManager",
  components: {
    HomeManager,
    // Navbar
  }
};
</script>