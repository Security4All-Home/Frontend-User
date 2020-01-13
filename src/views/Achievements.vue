<template>
  <div class="achievements">
    <Achievements/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Achievements from "@/components/Achievements.vue";
//import Navbar from "@/views/NavBar.vue";

export default {
  name: "achievements",
  components: {
    Achievements,
   // Navbar
  }
};
</script>