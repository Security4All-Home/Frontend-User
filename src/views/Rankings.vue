<template>
  <div class="rankings">
    <Navbar/>
    <Rankings/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Rankings from "@/components/Rankings.vue";
import Navbar from "@/views/NavBar.vue";

export default {
  name: "rankings",
  components: {
    Rankings,
    Navbar
  }
};
</script>
