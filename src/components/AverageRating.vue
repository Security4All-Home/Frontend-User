<template>
  <section>
    <b-rate icon-pack="fa" :disabled="true" :value="rating"></b-rate>
  </section>
</template>

<script>
import { getAverageScore } from "../API/apiReview";

export default {
  name: "StarRating",
  data() {
    return {
      rating: "",
      score: []
    };
  },
  created() {
    getAverageScore(this.$route.params._id).then(res => {
      this.score = JSON.stringify(res.data.data[0]);
      this.rating = this.score.replace('{"AVG(score)":', "");
      this.rating = this.rating.replace("}", "");
      /* eslint-disable */
      console.log("Average score:" + this.rating);
    });
  }
};
</script>