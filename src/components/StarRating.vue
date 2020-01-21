<template>
  <section>
    <b-rate icon-pack="fa" :value="rate"></b-rate>
  </section>
</template>

<script>
export default {
  name: "StarRating",
  methods: {
    // success() {
    //   this.$buefy.toast.open({
    //     message: "Thanks for you Rate!",
    //     type: "is-success"
    //   });
    // }
  }
};
</script>