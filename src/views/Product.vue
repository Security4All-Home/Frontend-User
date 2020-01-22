<template>
<!-- SECÇÃO INFORMAÇÃO SENSOR -->
<body>
  <div class="container">
    <section>
      <Navbar></Navbar>
    </section>
    <section id="secInfoSensor" class="section" style="margin-top: 30px;">
      <div class="box box-shadow">
        <div class="columns">
          <div class="column is-4-mobile is-6-tablet is-2-desktop is-centered is-vcentered">
            <figure class="image is-square">
              <img :src="sensor.image" />
            </figure>
            <span>
              <br />
              <AverageRating class="avg-rating"></AverageRating>
            </span>
          </div>
          <div class="column is-12-mobile is-6-tablet is-10-desktop">
            <p class="title has-text-left is-size-4">{{sensor.name}}</p>
            <p class="text has-text-justified">{{sensor.description}}</p>
            <br />
            <br />
            <nav class="level level-info">
              <div class="level-left">
                <p class="title is-size-4">
                  <strong>Price: {{sensor.price}}€</strong>
                </p>
              </div>
              <div class="level-right">
                <button class="button is-warning" @click="addToCart()">
                  <span>
                    Add to cart
                    <i class="fa fa-cart-plus"></i>
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <!-- FIM SECCÇÃO INFORMAÇÃO SENSOR -->

    <!-- SECÇÃO MAIS SENSORES -->
    <section id="secSensores" class="section">
      <p class="title has-text-left is-size-4">Specifications</p>
      <div class="box">
        <ul>
          <li>Input Voltage: 3.3 ~ 5V, 6V Maximum</li>
          <li>Working Current: 15uA</li>
          <li>Working Temperature: -20 ~ 85 ℃</li>
        </ul>
        <!-- {{sensor.specifications}} -->
      </div>
    </section>
    <!-- FIM SECÇÃO MAIS DO SENSOR -->

    <!-- SECÇÃO AVALIAÇÃO DO SENSOR -->
    <section id="secAvalia" class="section is-12-mobile is-6-tablet is-2-desktop">
      <div class="container">
        <p class="title has-text-left is-size-4">Rate the product</p>
        <article class="media">
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea
                  class="textarea"
                  placeholder="Adicionar cometário..."
                  rows="2"
                  v-model="userReview.text"
                ></textarea>
              </p>
            </div>
            <nav class="levels">
              <div class="level-left">
                <p class="text">Rating:</p>
                <StarRating v-model="userReview.rate" @update="updateRate($event)"></StarRating>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <div class="level-item">
                    <a class="button btn-rate is-warning" @click="doReview()">Rate</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </section>
    <!-- FIM SECÇÃO AVALIAÇÃO DO SENSOR -->

    <!-- SECÇÃO: AVALIAÇÕES -->
    <section id="secComentarios" class="section">
      <p class="title has-text-left is-size-4">Clients Reviews</p>
      <article
        class="media own-comment is-12-mobile"
        v-for="review in newReviews"
        :key="review.idUser"
      >
        <figure class="media-left">
          <p class="image is-64x64">
            <img class="is-rounded" :src="review.image" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p class="text">
              <strong>{{review.name}}</strong>
              <br />
              {{review.text}}
            </p>

            <p class="level-right">
              <AverageRating :value="scores.score"></AverageRating>
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</body>
</template>

<script>
import StarRating from "../components/StarRating";
import AverageRating from "../components/AverageRating";
import Navbar from "../components/Navbar";
import { getSensorById } from "../API/apiSensor";
import { getAllReviews } from "../API/apiReview";
import { getAllUsers } from "../API/apiUser";
import { getSensorsScore } from "../API/apiSensor";
import { postReviewText } from "../API/apiReview";
import { postReviewScore } from "../API/apiReview";
import { mapActions } from "vuex";

export default {
  name: "Product",
  components: {
    StarRating,
    AverageRating,
    Navbar
  },
  async created() {
    await getSensorById(this.$route.params._id).then(res => {
      /* eslint-disable */
      this.sensor = res.data.data[0];
      // console.log(this.sensor);
    });

    await getAllReviews(this.$route.params._id).then(res => {
      /* eslint-disable */
      this.reviews = res.data.data;
      console.log("REVIEWS: " + JSON.stringify(this.reviews));
    });

    await getAllUsers().then(res => {
      /* eslint-disable */
      this.users = res.data.data;
      let str = JSON.stringify(this.users);
      // console.log("Users: " + str);
    });

    await getSensorsScore(this.$route.params._id).then(res => {
      this.scores = res.data.data;
      /* eslint-disable */
      console.log("SCORES!!!! " + JSON.stringify(this.scores));
    });

    //For cycle to get all the info necessary for the reviews
    for (let i = 0; i < this.reviews.length; i++) {
      for (let j = 0; j < this.users.length; j++) {
        for (let h = 0; h < this.scores.length; h++) {
          if (this.reviews[i].idUser === this.users[j].idUser) {
            this.data = {
              name: this.users[j].name,
              text: this.reviews[i].text,
              image: this.users[j].image,
              rating: this.scores[h].score
            };
          }
        }
      }
      this.newReviews.push(this.data);
      console.log("REVIEWS!!!!! " + JSON.stringify(this.newReviews));
    }
  },
  data() {
    return {
      sensor: {},
      reviews: [],
      newReviews: [],
      data: "",
      userReview: {
        text: "",
        rate: ""
      },
      users: [],
      scores: [],
      userId: JSON.parse(localStorage.getItem("user")).idUser,
      sendReviewRate: {
        idSensor: "",
        idUser: "",
        score: ""
      },
      sendReviewData: {
        text: "",
        idUser: "",
        idSensor: ""
      }
    };
  },
  methods: {
    ...mapActions(["addSensor", "currentSensor"]),

    addToCart(sensor) {
      /* eslint-disable */
      sensor = this.sensor;
      this.addSensor(sensor);
      console.log("ADICIONAR:" + sensor.name);

      this.$buefy.toast.open({
        message: "Sensor has been added to cart!",
        type: "is-success"
      });
    },
    updateRate(rate) {
      this.userReview.rate = rate;
    },
    async doReview() {
      /* eslint-disable */
      this.sendReviewRate.idSensor = this.$route.params._id;
      this.sendReviewRate.idUser = this.userId;
      this.sendReviewRate.score = this.userReview.rate;

      this.sendReviewData.text = this.userReview.text;
      this.sendReviewData.idUser = this.userId;
      this.sendReviewData.idSensor = this.$route.params._id;

      await postReviewText(this.sendReviewData).then(res => {
        console.log("TEXT: " + JSON.stringify(res.data));
      });

      await postReviewScore(this.sendReviewRate).then(res => {
        console.log("SCORE: " + JSON.stringify(res.data));
      });

      this.$buefy.toast.open({
        message: "Thanks for your rating!",
        type: "is-success"
      });
    }
  },
  props: {}
};
</script>


<style lang="scss" scoped>
@import "../assets/product.scss";
@import "../assets/main.scss";
</style>

