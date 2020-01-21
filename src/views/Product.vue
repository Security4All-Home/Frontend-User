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
            <p class="text has-text-justified">
              Pyroelectric infrared motion sensor can detect infrared signals from a moving person or moving animal, and output switching signals. It can be applied to a variety of occasions to detect the movement of human body.
              Conventional pyroelectric infrared sensors require body pyroelectric infrared detector, professional chip, complex peripheral circuit, so the size is bigger, with complex circuit, and lower reliability.
              This new pyroelectric infrared motion sensor, specially designed for Arduino. It uses an integrated digital body pyroelectric infrared sensor, has smaller size, higher reliability, lower power consumption and simpler peripheral circuit.
            </p>
            <br />
            <br />
            <nav class="level">
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
                  v-model="text"
                ></textarea>
              </p>
            </div>
            <nav class="levels">
              <div class="level-left">
                <p class="text">Rating:</p>
                <StarRating v-model="rating"></StarRating>
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
      <article class="media own-comment is-12-mobile" v-for="review in reviews" :key="review">
        <figure class="media-left">
          <p class="image is-64x64">
            <img class="is-rounded" src="../assets/img/user.jpg" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p class="text">
              <strong>{{review.idUser}}</strong>
              <small>@johnsmith</small>
              <br />
              {{review.text}}
            </p>

            <p class="level-right">
              <StarRating></StarRating>
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
// import {  postReview } from '../API/apiReview';
import { mapActions } from "vuex";

export default {
  name: "Product",
  components: {
    StarRating,
    AverageRating,
    Navbar
  },
  created() {
    getSensorById(this.$route.params._id).then(res => {
      /* eslint-disable */
      this.sensor = res.data.data[0];
      // console.log(this.sensor);
    });

    getAllReviews(this.$route.params._id).then(res => {
      /* eslint-disable */
      this.reviews = res.data.data;
      console.log("REVIEWS: " + this.reviews);
    });

    getAllUsers().then(res => {
      /* eslint-disable */
      this.users = res.data;
      let str = JSON.stringify(users);
      console.log("Users: " + str);
    });
  },
  data() {
    return {
      sensor: {},
      reviews: [],
      userReview: {
        text: this.text,
        rating: this.rating
      },
      users: []
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

    doReview(review) {
      /* eslint-disable */
      review = this.userReview;
      console.log("Text: " + review.text + "and rating: " + review.rating);
    }
  },
  props: {}
};
</script>


<style lang="scss" scoped>
@import "../assets/product.scss";
@import "../assets/main.scss";
</style>

