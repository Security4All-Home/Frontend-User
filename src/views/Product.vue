<template>
  <!-- SECÇÃO: INFORMAÇÃO SENSOR -->
  <div style="background-color:#f2f2f2">
    <div class="container">
      <section id="secInfoSensor" class="hero hero-shadow">
        <div class="hero-body">
          <div class="columns">
            <div class="column is-12-mobile is-6-tablet is-2-desktop is-centered is-vcentered">
              <figure class="image is-square">
                <img src="../assets/Images/motion_sensor.png" />
              </figure>
              <span class="is-centered">
                <br />
                <StarRating></StarRating>
              </span>
            </div>
            <div class="column is-12-mobile is-6-tablet is-10-desktop">
              <p class="title">PIR MOTION SENSOR</p>
              <p class="text has-text-justified">
                Pyroelectric infrared motion sensor can detect infrared signals from a moving person or moving animal, and output switching signals. It can be applied to a variety of occasions to detect the movement of human body.
                Conventional pyroelectric infrared sensors require body pyroelectric infrared detector, professional chip, complex peripheral circuit, so the size is bigger, with complex circuit, and lower reliability.
                This new pyroelectric infrared motion sensor, specially designed for Arduino. It uses an integrated digital body pyroelectric infrared sensor, has smaller size, higher reliability, lower power consumption and simpler peripheral circuit.
              </p>
              <br />
              <br />
              <nav class="level">
                <div class="level-left">
                  <p class="title">
                    <strong>Preço: 10,00€</strong>
                  </p>
                </div>
                <div class="level-right">
                  <button class="button is-warning">
                    <span>
                      Adicionar
                      <i class="fa fa-cart-plus"></i>
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <!-- SECÇÃO: MAIS SENSORES -->
      <section id="secSensores" class="hero hero-shadow">
        <p class="title" id="specsTitle">Specifications</p>
        <div class="container" id="specs">
          <ul>
            <li>Input Voltage: 3.3 ~ 5V, 6V Maximum</li>
            <li>Working Current: 15uA</li>
            <li>Working Temperature: -20 ~ 85 ℃</li>
          </ul>
          <!-- <div class="box" id="specs">
            
          </div>-->
        </div>
      </section>

      <!-- SECÇÃO: AVALIAÇÃO DO SENSOR -->
      <section id="secAvalia" class="hero is-12-mobile is-6-tablet is-2-desktop">
        <p class="title">Rate the product</p>
        <article class="media">
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" placeholder="Adicionar cometário..." rows="2"></textarea>
              </p>
            </div>
            <nav class="level">
              <div class="level-left">
                <p class="text">Rating</p>
                <StarRating></StarRating>
                <!-- <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>-->
              </div>
              <div class="level-right">
                <div class="level-item">
                  <div class="level-item">
                    <a class="button is-warning">Send</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </section>

      <!-- SECÇÃO: AVALIAÇÕES -->
      <section id="secComentarios">
        <p class="title">Clients Reviews</p>
        <article class="media own-comment is-12-mobile is-6-tablet is-2-desktop">
          <figure class="media-left">
            <p class="image is-64x64">
              <img class="is-rounded" src="../assets/Images/user.jpg" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p class="text">
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>

              <p class="level-right">
                <StarRating></StarRating>
                <!-- <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>-->
              </p>
            </div>
          </div>
          <!-- <div class="media-right">
          <span class="icon is-small">
            <i class="fa fa-pencil"></i>
          </span>
          </div>-->
        </article>

        <article class="media other-comment is-12-mobile">
          <figure class="media-left">
            <p class="image is-64x64">
              <img class="is-rounded" src="../assets/Images/user2.jpg" />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Mary Jane</strong>
                <small>@maryjane</small>
                <small>31m</small>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
              <p class="level-right">
                <StarRating></StarRating>
                <!-- <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>-->
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import StarRating from "../components/StarRating";

export default {
  components: {
    StarRating
  },
  name: "Product",
  created() {},
  methods: {}
};
</script>


<style lang="scss" scoped>
@import "../assets/product.scss";
</style>

