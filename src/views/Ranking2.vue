<template>
  <div class="ranking2">
    <Navbar/>
    <Rankings/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Rankings from "@/components/Ranking2.vue";
import Navbar from "@/views/NavBar.vue";

export default {
  name: "ranking2",
  components: {
    Rankings,
    Navbar
  }
};
</script>
