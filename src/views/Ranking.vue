<template>
  <div class="ranking">
    <Rankings/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Rankings from "@/components/Ranking.vue";

export default {
  name: "ranking",
  components: {
    Rankings
  }
};
</script>